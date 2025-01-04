import { cn, Pagination, PaginationItemRenderProps, PaginationItemType } from '@nextui-org/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const MyPagination = (
    {
        total,
        page,
        onchange
    }:{
        total:number,
        page:number,
        onchange: (e:number)=>void

    }
) => {
    const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button key={key} className={cn(className, "bg-transparent min-w-8 w-8 h-8")} onClick={onNext}>
          <ChevronRight  />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button key={key} className={cn(className, "bg-transparent min-w-8 w-8 h-8")} onClick={onPrevious}>
          <ChevronLeft/>
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return <button key={key} className={className}>...</button>;
    }

    // cursor is the default item
    return (
      <button
        ref={ref}
        key={key}
        className={cn(
          className,
          isActive &&
            "text-white bg-gradient-to-br from-[#ECB003] to-[#AF3F2B]  font-bold",
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    total > 1 ?
    <Pagination
      disableCursorAnimation
      showControls
      total={total}
      page={page}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="light"
      onChange={onchange}
    />:<></>
  );
}

export default MyPagination