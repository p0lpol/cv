import CardItem, {FlipCardProps} from "@/src/components/CardItem";

export default function Collection({items}: { items: FlipCardProps[]}) {
    return (
        <div className="grid grid-cols-4 w-full justify-center gap-4">
            {items.map((item, index) => (
                <CardItem name={item.name} image={item.image} key={index}/>
            ))}
        </div>
    )
}