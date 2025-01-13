import {
  Select,
  SelectedItems,
  SelectItem,
  SharedSelection,
} from "@nextui-org/react";
import React, { ReactNode } from "react";

import { ModelDto } from "@/AppDtos/Shared/model-dto";

const SharedSingleInputFromCollection = <TGetDto extends ModelDto>({
  items,
  currectValue,
  onChange,
  onSelectRenderFunction,
  placeholder,
  renderFunction,
}: {
  items: TGetDto[];
  onChange: (value: string) => void;
  currectValue: any;
  renderFunction: (id: TGetDto) => ReactNode;
  onSelectRenderFunction: (item: TGetDto) => ReactNode;
  placeholder: string;
}) => {
  const innerOnSelectionChanged = (keys: SharedSelection) => {
    onChange(keys.currentKey as any);
  };

  return (
    <>
      {
        <Select
          disallowEmptySelection
          defaultSelectedKeys={[currectValue]}
          items={items}
          label={placeholder}
          placeholder={placeholder}
          renderValue={(items: SelectedItems<TGetDto>) => {
            return items.map((item) =>
              onSelectRenderFunction(item.data as TGetDto)
            );
          }}
          required={true}
          selectedKeys={[currectValue]}
          onSelectionChange={innerOnSelectionChanged}
        >
          {(item) => (
            <SelectItem key={item.id}>{renderFunction(item)}</SelectItem>
          )}
        </Select>
      }
    </>
  );
};

export default SharedSingleInputFromCollection;
