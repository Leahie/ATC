import Box from "./Sponsors_box";
import tinycolor from "tinycolor2";

interface TierProps {
    array: string[] | { name: string; imageUrl: string; description: string; website: string }[];
    backgroundColor: string;
    title: string;
}

export default function TierSection(props: TierProps) {
    const darkerColor = tinycolor(props.backgroundColor).darken(10).toString();

    return (
        <div className="w-full" style={{ backgroundColor: props.backgroundColor, padding: "1rem 0" }}>
            <h2
                className="text-white text-3xl font-bold mx-5 mb-3 w-fit"
                style={{ borderBottom: `8px solid ${darkerColor}` }}
            >
                {props.title}
            </h2>
            <div className="flex flex-wrap gap-8 my-5 mx-auto px-4 ">
                {props.array.map((item, index) => {
                    // Check if item is a string or an object
                    if (typeof item === "string") {
                        // Render a placeholder or handle string items as needed
                        return (
                            <div key={index} className="snap-start w-1/3">
                                <p>{item}</p>
                            </div>
                        );
                    } else {
                        // Render the Box component for object items
                        return (
                            <div key={index} className="snap-start w-auto">
                                <Box
                                    name={item.name}
                                    imageUrl={item.imageUrl}
                                    description={item.description}
                                    website={item.website}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}
