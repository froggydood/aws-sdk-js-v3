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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeExplainabilityRequest, DescribeExplainabilityResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeExplainabilityCommand,
  serializeAws_json1_1DescribeExplainabilityCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeExplainabilityCommandInput extends DescribeExplainabilityRequest {}
export interface DescribeExplainabilityCommandOutput extends DescribeExplainabilityResponse, __MetadataBearer {}

/**
 * <p>Describes an Explainability resource created using the <a>CreateExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeExplainabilityCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeExplainabilityCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeExplainabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExplainabilityCommandInput} for command's `input` shape.
 * @see {@link DescribeExplainabilityCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class DescribeExplainabilityCommand extends $Command<
  DescribeExplainabilityCommandInput,
  DescribeExplainabilityCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeExplainabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExplainabilityCommandInput, DescribeExplainabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeExplainabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeExplainabilityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeExplainabilityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeExplainabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeExplainabilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExplainabilityCommandOutput> {
    return deserializeAws_json1_1DescribeExplainabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
