const AUTH_MESSAGES: Record<string, string> = {
  'auth/invalid-credential': 'E-Mail oder Passwort ist falsch.',
  'auth/user-not-found': 'Kein Konto mit dieser E-Mail-Adresse gefunden.',
  'auth/wrong-password': 'Falsches Passwort.',
  'auth/too-many-requests': 'Zu viele Anmeldeversuche. Bitte warte einige Minuten und versuche es erneut.',
  'auth/network-request-failed': 'Netzwerkfehler. Bitte überprüfe deine Internetverbindung.',
  'auth/invalid-email': 'Ungültiges E-Mail-Format.',
  'auth/user-disabled': 'Dieses Konto wurde deaktiviert.',
  'auth/invalid-api-key': 'Firebase Auth ist nicht konfiguriert (API-Key fehlt).',
}

const FIRESTORE_MESSAGES: Record<string, string> = {
  'permission-denied': 'Zugriff verweigert. Bitte melde dich erneut an.',
  'not-found': 'Die angefragten Daten wurden nicht gefunden.',
  'unavailable': 'Der Dienst ist momentan nicht erreichbar. Bitte versuche es später erneut.',
  'aborted': 'Die Operation wurde abgebrochen. Bitte versuche es erneut.',
}

export function getErrorMessage(e: unknown, fallback = 'Ein unerwarteter Fehler ist aufgetreten.'): string {
  if (!e) return fallback

  if (e instanceof Error) {
    const err = e as any

    if (err.code && AUTH_MESSAGES[err.code]) {
      return AUTH_MESSAGES[err.code]
    }

    if (err.code && FIRESTORE_MESSAGES[err.code]) {
      return FIRESTORE_MESSAGES[err.code]
    }

    if (err.message?.includes('permission-denied')) {
      return 'Zugriff verweigert. Bitte melde dich erneut an.'
    }

    if (err.message?.includes('Failed to fetch dynamically imported module') || err.message?.includes('Loading chunk')) {
      return 'Seite konnte nicht geladen werden. Bitte lade die Seite neu.'
    }

    if (err.message?.toLowerCase().includes('network') || err.message?.toLowerCase().includes('fetch')) {
      return 'Netzwerkfehler. Bitte überprüfe deine Internetverbindung.'
    }

    return err.message || fallback
  }

  return fallback
}
