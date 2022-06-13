import React from "react";
import { AutoSizer, List, ListRowRenderer } from "react-virtualized";

export type Props = {
  /** Optional renderer to be used in place of rows when rowCount is 0 */
  noRowsRenderer?: (() => JSX.Element) | undefined;
  /** Responsible for rendering a row given an index; ({ index: number }): node */
  rowRenderer: ListRowRenderer;
  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex?: number | undefined;
  width?: number;
  height?: number;
  rowCount: number;
  rowHeight: number;
};

const ListComponent = (props: Props) => {
  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => {
        return <List {...props} width={width} height={height} />;
      }}
    </AutoSizer>
  );
};

export default ListComponent;
