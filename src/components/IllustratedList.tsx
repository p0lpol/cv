import IllustratedItem, {IllustratedItemProps} from "@/src/components/IllustratedItem";

export default function IllustratedList({items}: {items: IllustratedItemProps[]}) {
    return(
        <ul>
            <li>
                { items.map((item, index) => (
                    <IllustratedItem key={index} {...item}/>
                ))}
            </li>
        </ul>
    )
}