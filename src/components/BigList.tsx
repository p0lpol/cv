import BigItem, {BigItemsProps} from "@/src/components/BigItem";

export default function BigList({items}: {items: BigItemsProps[]}) {
    return(
        <ul className="flex flex-col gap-8 w-3/4 self-center max-h-fit">
            {items.map((item, index) => (
                <BigItem key={index} {...item}/>
            ))}
        </ul>
    )
}