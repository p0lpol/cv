import BigItemLink, {BigItemsProps} from "@/src/components/BigItemLink";
import BigItem from "@/src/components/BigItem";

interface BigListProps {
    items: BigItemsProps[]
    isLink?: boolean
}

export default function BigList({items, isLink = true}: BigListProps) {
    return isLink ?
    (
        <ul className="flex flex-col gap-8 w-3/4 self-center max-h-fit">
            {items.map((item, index) => <BigItemLink key={index} {...item}/>)}
        </ul>
    ): (
        <ul className="flex flex-col gap-8 w-3/4 self-center max-h-fit">
            {items.map((item, index) => <BigItem key={index} {...item}/>)}
        </ul>
    );
}