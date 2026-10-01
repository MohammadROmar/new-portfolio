export type IsoDate = `${number}-${number}-${number}`;

const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

export function isValidIsoDate(value: string): value is IsoDate {
  const match = ISO_DATE_PATTERN.exec(value);

  if (!match) return false;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

export function assertValidIsoDate(value: string, label: string): void {
  if (!isValidIsoDate(value)) {
    throw new Error(
      `Invalid date for ${label}: "${value}". Expected a real calendar date in zero-padded YYYY-MM-DD form, e.g. 2026-10-01.`,
    );
  }
}

export function getLatestIsoDate(
  dates: readonly IsoDate[],
): IsoDate | undefined {
  return dates.reduce<IsoDate | undefined>(
    (latest, date) => (latest === undefined || date > latest ? date : latest),
    undefined,
  );
}
