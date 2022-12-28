import "./styles.css";
import EntityService from "../services/EntityService";
import EntityConfig from "../services/EntityService/config";
import { retrieve as TagsRetrieve } from "../services/TagService";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function updateConfigOfEntityService() {
  EntityConfig.baseURL = "/test";
}

function fetchEntity() {
  EntityService.retrieve();
}

function fetchTags() {
  TagsRetrieve();
}
