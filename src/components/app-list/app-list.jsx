import TariffCard from "../app-card/app-card";
import "./app-list.css";

const TariffCardsList = ({ tariffs }) => {

    const items = tariffs.map(item => {
        const { id, ...itemProps } = item
        return (
            <TariffCard key={id} {...itemProps} />
        )
    })

    return (
        <div className="list">
            {items}
        </div>
    )
}

export default TariffCardsList;