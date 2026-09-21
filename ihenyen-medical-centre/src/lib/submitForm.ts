type PublicEnv = {
  VITE_APPOINTMENT_ENDPOINT?: string;
  VITE_CONTACT_ENDPOINT?: string;
};

const env = (import.meta as ImportMeta & { env: PublicEnv }).env;

export const formEndpoints = {
  appointment: env.VITE_APPOINTMENT_ENDPOINT?.trim() ?? '',
  contact: env.VITE_CONTACT_ENDPOINT?.trim() ?? '',
};

export async function submitJson<TPayload>(endpoint: string, payload: TPayload): Promise<void> {
  if (!endpoint) {
    throw new Error('Online submissions are not configured yet. Please contact the hospital directly.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('We could not send your request. Please contact the hospital directly.');
  }
}
