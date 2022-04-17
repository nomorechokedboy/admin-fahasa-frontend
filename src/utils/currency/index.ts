export const VietNameseParser = (value: string | undefined) =>
    value && value.replace(/\$\s?|(.*)/g, "");

export const VietNameseFormatter = (value: string | undefined) =>
    value && !Number.isNaN(parseFloat(value))
        ? `đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        : "đ ";
