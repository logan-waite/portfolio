// This seems to be causing hydration issues: https://github.com/FortAwesome/Font-Awesome/issues/19348
const { library } = require("@fortawesome/fontawesome-svg-core");
import {
    faGithub,
    faTwitter,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
    faTransporter,
    faTransporter1,
    faTransporter2,
    faTransporter3,
    faTransporter4,
    faTransporter5,
    faTransporter6,
    faTransporter7,
    faTransporterEmpty,
    faDisplayCode,
    faPlaneDeparture,
    faFamily,
    faGearComplexCode,
    faHammer,
} from "@fortawesome/pro-solid-svg-icons";

// Brands
library.add(faGithub, faTwitter, faLinkedinIn, faInstagram);

// Transporter
library.add(
    faTransporter,
    faTransporter1,
    faTransporter2,
    faTransporter3,
    faTransporter4,
    faTransporter5,
    faTransporter6,
    faTransporter7,
    faTransporterEmpty
);

// About Icons
library.add(
    faDisplayCode,
    faPlaneDeparture,
    faFamily,
    faGearComplexCode,
    faHammer
);
