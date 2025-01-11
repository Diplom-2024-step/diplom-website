import RelationService from "../shared/RelationService";

export class FavoriteTourRelationService extends RelationService {
  public constructor() {
    super("Tour", "User");
  }
}
