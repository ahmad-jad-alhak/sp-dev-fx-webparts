import { SiteList } from "./IListConfigProps";

export default interface IResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  FileExtension: string;
  SiteUrl: string;
  ListName: string; //Field to display list name in detail list
  List: SiteList;
  Id: number;
  UniqueId: string;
  ServerUrl: string;
  FileLeafRef: string;
  OData__ModernAudienceTargetUserField: Audience[];
}

interface Audience {
  Name: string;
}
