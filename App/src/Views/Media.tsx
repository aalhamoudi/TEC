import * as React from 'react';

import { Article } from 'infinikit/Components/';
import List, { FilteredList, ThumbnailGalleryCell } from 'infinikit/Components//Data/List';


export default class Media extends React.Component<{}, {}> {
    public render() {
        let data = new Array<any>();
        data.push({ title: "Project1", image: "/images/projects/hillcrest.jpg", category: "Outdoor", data: ["/images/projects/hillcrest.jpg", "/images/projects/aspen.jpg"] });
        data.push({ title: "Project2", image: "/images/projects/aspen.jpg", category: "Cabin", data: ["/images/projects/hillcrest.jpg", "/images/projects/aspen.jpg"] });
        data.push({ title: "Project1", image: "/images/projects/hillcrest.jpg", category: "Outdoor", data: ["/images/projects/hillcrest.jpg", "/images/projects/aspen.jpg"] });
        data.push({ title: "Project2", image: "/images/projects/aspen.jpg", category: "Cabin", data: ["/images/projects/hillcrest.jpg", "/images/projects/aspen.jpg"] });
        data.push({ title: "Project1", image: "/images/projects/hillcrest.jpg", category: "Outdoor", data: ["/images/projects/hillcrest.jpg", "/images/projects/aspen.jpg"] });
        data.push({ title: "Project2", image: "/images/projects/aspen.jpg", category: "Cabin", data: ["/images/projects/hillcrest.jpg", "/images/projects/aspen.jpg"] });

        return (
            <Article>
                <FilteredList template={ThumbnailGalleryCell} data={data} categories={["Outdoor", "Cabin"]} />
            </Article>
        )
    }
}

