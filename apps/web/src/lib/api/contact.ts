import { ApiResponse } from '@nirmal/types';
import { API_ROUTES } from '@nirmal/config';
import { ContactFormInput } from '@nirmal/validation';
import { apiClient } from './client';

export interface ContactResponseData {
  received: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormInput
): Promise<ApiResponse<ContactResponseData>> {
  return apiClient<ContactResponseData>(API_ROUTES.contact, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
