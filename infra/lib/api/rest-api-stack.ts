import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * REST APIを構成するためのスタック
 */
export class RestApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }
};
