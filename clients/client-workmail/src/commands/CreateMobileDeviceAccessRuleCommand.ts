// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateMobileDeviceAccessRuleRequest, CreateMobileDeviceAccessRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand,
  serializeAws_json1_1CreateMobileDeviceAccessRuleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface CreateMobileDeviceAccessRuleCommandInput extends CreateMobileDeviceAccessRuleRequest {}
export interface CreateMobileDeviceAccessRuleCommandOutput
  extends CreateMobileDeviceAccessRuleResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new mobile device access rule for the specified Amazon WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CreateMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link CreateMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class CreateMobileDeviceAccessRuleCommand extends $Command<
  CreateMobileDeviceAccessRuleCommandInput,
  CreateMobileDeviceAccessRuleCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMobileDeviceAccessRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMobileDeviceAccessRuleCommandInput, CreateMobileDeviceAccessRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "CreateMobileDeviceAccessRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMobileDeviceAccessRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMobileDeviceAccessRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMobileDeviceAccessRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMobileDeviceAccessRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMobileDeviceAccessRuleCommandOutput> {
    return deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
