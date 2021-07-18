import { colors } from "./global-variables";

export function getValueColor(value: number): string {
    if (value >= 0) {
        return colors.positive;
    } else {
        return colors.negative;
    }
}