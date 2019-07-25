// relative path 
import defaultExport from "module-name";

// alias the default export
import { default as alias } from "module-name";

// import all exports under the 'name' namespace
import * as name from "module-name";

// import namedExport 
import { namedExport } from "module-name";

// alias using 'as'
import { namedExport as alias } from "module-name";

// combining a few imports from the same module
import defaultExport, { export1 , export2 } from "module-name";


// AND The export versions
export default Export; 

// re-export a default import as an alias
export { default as alias } from "module-name";

// export all exports under the 'name' namespace
export * from "module-name";

// export namedExport 
export { namedExport } from "module-name";

// alias using 'as' from an external module
export { namedExport as alias } from "module-name";

// combining a few exports from the same module
export { defaultExport as default, export1 , export2 };