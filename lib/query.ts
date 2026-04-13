export type InboundParams = {
  ref: string | null;
  partner: string | null;
  campaign: string | null;
  src: string | null;
};

export function getInboundParams(searchParams: {
  [key: string]: string | string[] | undefined;
}): InboundParams {
  const read = (key: string): string | null => {
    const value = searchParams[key];
    if (Array.isArray(value)) return value[0] || null;
    return value || null;
  };
  return {
    ref: read("ref"),
    partner: read("partner"),
    campaign: read("campaign"),
    src: read("src"),
  };
}
