import BigItems, {BigItemsProps} from "@/src/components/BigItems";

export default function BigList({items}: {items: BigItemsProps[]}) {
    return(
        <ul className="flex flex-1 flex-col gap-8 w-3/4 self-center">
            {items.map((item, index) => (
                <BigItems key={index} {...item}/>
            ))}
        </ul>
    )
}