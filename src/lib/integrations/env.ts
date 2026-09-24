const productionIntegrationsEnabled =
  process.env.PRODUCTION_INTEGRATIONS_ENABLED === "true";

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }
  return value;
}

export const integrationConfig = {
  productionIntegrationsEnabled,
  get supabaseUrl() {
    return required("SUPABASE_URL");
  },
  get supabaseServiceRoleKey() {
    return required("SUPABASE_SERVICE_ROLE_KEY");
  },
  get resendApiKey() {
    return required("RESEND_API_KEY");
  },
  get resendFromEmail() {
    return required("RESEND_FROM_EMAIL");
  },
  get inquiryNotificationEmail() {
    return required("INQUIRY_NOTIFICATION_EMAIL");
  },
} as const;
