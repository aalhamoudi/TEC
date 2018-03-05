import React from 'react';

import Box from '../Layout/Box';
import Modal from '../Auxiliary/Modal';
import { Styled } from '../Styles/Styled';

import Carousel from './Carousel';

interface ListProps {
    template: React.ReactType;
    data: any[];
}

export default class List extends React.Component<ListProps, {}> {
    render() {
        return (
            <Box fill="width" justify="center" wrap="wrap">
                {this.props.data.map((item, index) => {
                    return (
                        <this.props.template key={index} item={item} />
                    );
                })}
            </Box>
        );
    }
}


interface FilteredListProps {
    template: React.ReactType;
    data: any[];
    categories: string[];
}

export class FilteredList extends React.Component<FilteredListProps, { category: string }> {
    constructor(props, context?) {
        super(props, context);
        this.state = {
            category: "All"
        };
    }

    handleFilter(category: string) {
        this.setState({ category: category });
    }

    render() {
        return (
            <Box direction="column" fill="both">
                <Box fill="width" justify="center">
                    <button onClick={() => this.handleFilter.bind(this)("All")} style={{ margin: "0 5px", border: "none" }}>{"All"}</button>    
                    {this.props.categories.map((category, index) => {
                        return (
                            <button key={index} onClick={() => this.handleFilter.bind(this)(category)} style={{margin: "0 5px", border: "none"}}>{category}</button>    
                        );
                    })}
                </Box>
                <List template={this.props.template} data={this.state.category === "All" ? this.props.data : this.props.data.filter(i => i.category === this.state.category)} />
            </Box>
        );
    }
}

interface GalleryProps {
    data: any[];
}

export class Gallery extends React.Component<GalleryProps, {}> {
    render() {
        console.log(this.props.data.map(i => ({ image: i })));
        return (
            <Box direction="column" fill="both">
                <List template={GalleryCell} data={this.props.data.map(i => ({ image: i, data: this.props.data }))} />
            </Box>
        );
    }
}

interface ThumbnailItem {
    image: string;
    title: string;
    data: any;
    category?: string;
}


interface ThumbnailProps {
    image: string;
    title?: string;
}

export class Thumbnail extends React.Component<ThumbnailProps, { hover: boolean, open: boolean }> {
    constructor(props, context?) {
        super(props, context);
        this.state = {
            hover: false,
            open: false
        };
    }

    handleClick() {
        this.setState({ open: !this.state.open, hover: false })
    }

    handleMouseEnter() {
        this.setState({ hover: true })
    }

    handleMouseLeave() {
        this.setState({ hover: false })
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} style={{ backgroundImage: `url("${this.props.image}")`, width: 250, height: 200, margin: 5, cursor: 'pointer' }}>
                {this.props.title && <ThumbnailInfo shown={this.state.hover} title={this.props.title} />}
                <Modal shown={this.state.open} toggle={this.handleClick.bind(this)} title={this.props.title}>{this.props.children}</Modal>
            </div>
        );
    }
}

interface ThumbnailInfoProps {
    shown: boolean;
    title: string;
}
@Styled<ThumbnailInfoProps>()
class ThumbnailInfo extends React.Component<ThumbnailInfoProps, {}> {
    static style = (theme, props) => ({
        display: props.shown ? 'inline-flex' : 'none',
        backgroundColor: "white",
        opacity: 0.75,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    });

    render() {
        return (
            <h4 style={{ margin: 0 }}>{this.props.title}</h4>
        );
    }
}

interface ThumbnailCellProps {
    item: ThumbnailItem;
    template: React.ReactType;
}
export class ThumbnailCell extends React.Component<ThumbnailCellProps, {}> {
    render() {
        return (
            <Thumbnail image={this.props.item.image} title={this.props.item.title}>
                <this.props.template data={this.props.item.data} />
            </Thumbnail>
        );
    }
}


interface GalleryCellProps {
    item: any;
}

export class GalleryCell extends React.Component<GalleryCellProps, {}> {
    render() {
        return (
            <Thumbnail image={this.props.item.image}>
                <Carousel images={this.props.item.data} />
            </Thumbnail>
        );
    }
}

interface ThumbnailGalleryCellProps {
    item: ThumbnailItem;
}

export class ThumbnailGalleryCell extends React.Component<ThumbnailGalleryCellProps, {}> {
    render() {
        return (
            <ThumbnailCell item={this.props.item} template={Gallery}></ThumbnailCell>
        );
    }
}

