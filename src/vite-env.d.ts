/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_CUSTOMER_PHONE: string;
    readonly VITE_AGENT_PHONE: string;
    readonly VITE_STAGING_ENDPOINT: string;
    // add more environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  