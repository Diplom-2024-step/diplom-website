import { AxiosResponse } from "axios";
import Service from "./Service";

export default abstract class RelationService extends Service {
  public firstModalName: string;
  public secondModalName: string;

  protected constructor(firstModalName: string, secondModalName: string) {
    super("");
    this.firstModalName = firstModalName;
    this.secondModalName = secondModalName;
  }

  /**
   * @throws {AxiosError} If the request fails
   */
  public async get(
    firstModalId: string,
    secondModalId: string
  ): Promise<AxiosResponse> {
    return await this.axiosInstance.get(
      `${this.firstModalName}/${firstModalId}/${this.secondModalName}/${secondModalId}`,
       {
        validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  }
      }
    )
 
  }

  /**
   * @throws {AxiosError} If the request fails
   */
  public async post(
    firstModalId: string,
    secondModalId: string
  ): Promise<AxiosResponse> {
    return await this.axiosInstance.post(
      `${this.firstModalName}/${firstModalId}/${this.secondModalName}/${secondModalId}`
    );
  }

  /**
   * @throws {AxiosError} If the request fails
   */
  public async delete(
    firstModalId: string,
    secondModalId: string
  ): Promise<AxiosResponse> {
    return await this.axiosInstance.delete(
      `${this.firstModalName}/${firstModalId}/${this.secondModalName}/${secondModalId}`
    );
  }
}
