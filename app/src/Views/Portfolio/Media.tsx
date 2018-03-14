import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import FirebaseUI from 'firebaseui';
import * as firebase from 'firebase';

import { Stores, PortfolioStore } from '../../Stores'

import Auth from '../../Services/Auth'

import { Article } from '../../Components';
import List, { FilteredList, ThumbnailGalleryCell } from '../../Components/Data/List';

type PortfolioProps = PortfolioStore & RouteComponentProps<{}>;


@inject((stores: Stores) => stores.portfolioStore)
@observer
export default class Media extends React.Component<PortfolioProps, {}> {
    componentDidMount() {
    }

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

