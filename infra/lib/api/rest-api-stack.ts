import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

/**
 * REST APIを構成するためのスタック
 */
export class RestApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda
    const lambdaFunc = new lambda.Function(this, "lambdaFunc", {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: "app.lambdaHandler",
      code: lambda.Code.fromAsset("../lambda/hello-world"),
    });

    // API Gateway
    const apiGw = new apigateway.RestApi(this, "API");
    const funcResource = apiGw.root.addResource("hello");
    funcResource.addMethod("GET", new apigateway.LambdaIntegration(lambdaFunc));
  }
};
