import {
  GetProcessedOrderDto,
  getProcessedOrderDtoSchema,
} from "@/AppDtos/Dto/Models/ProcessedOrders/get-processed-order-dto";
import {
  CreateProcessedOrderDto,
  createProcessedOrderDtoSchema,
} from "@/AppDtos/Dto/Models/ProcessedOrders/create-processed-order-dto";
import {
  UpdateProcessedOrderDto,
  updateProcessedOrderDtoSchema,
} from "@/AppDtos/Dto/Models/ProcessedOrders/update-processed-order-dto";

import { CrudService } from "../shared/CrudService";

export class ProcessedOrderService extends CrudService<
  GetProcessedOrderDto,
  CreateProcessedOrderDto,
  UpdateProcessedOrderDto
> {
  public constructor() {
    super(
      getProcessedOrderDtoSchema,
      createProcessedOrderDtoSchema,
      updateProcessedOrderDtoSchema
    );
  }
}
