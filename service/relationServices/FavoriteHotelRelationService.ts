import RelationService from "../shared/RelationService";

export class FavoriteHotelRelationService extends RelationService {
  public constructor() {
    super("Hotel", "User");
  }
}
