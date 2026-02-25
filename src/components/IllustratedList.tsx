import IllustratedItem, {IllustratedItemProps} from "@/src/components/IllustratedItem";

export default function IllustratedList({items}: {items: IllustratedItemProps[]}) {
    return(
        <ul>
            <li className="flex flex-col gap-4 divide-y divide-slate-800">
                { items.map((item, index) => (
                    <IllustratedItem key={index} {...item}/>
                ))}
            </li>
        </ul>
    )
}