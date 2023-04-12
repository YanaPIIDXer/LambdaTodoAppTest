import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RestApiStack } from './api/rest-api-stack';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // REST APIスタック
    new RestApiStack(this, "RestApi");
  }
}
