import { LightningService } from "openapi/client";
import { headersFor } from "utils/api";

const lightningService = new LightningService({ HEADERS: headersFor() });

export default lightningService.default;
