import { SectionListData } from "react-native";
export interface Parameters<T> {
    getItemHeight: (rowData: T, sectionIndex: number, rowIndex: number) => number;
    getSeparatorHeight?: (sectionIndex: number, rowIndex: number) => number;
    getSectionHeaderHeight?: (sectionIndex: number) => number;
    getSectionFooterHeight?: (sectionIndex: number) => number;
    listHeaderHeight?: number | (() => number);
}
declare const _default: <T = any>({ getItemHeight, getSeparatorHeight, getSectionHeaderHeight, getSectionFooterHeight, listHeaderHeight, }: Parameters<T>) => (data: SectionListData<T, import("react-native").DefaultSectionT>[] | null, index: number) => {
    length: number;
    offset: number;
    index: number;
};
export default _default;
