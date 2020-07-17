import React from 'react';

export const SORT_NAVIGATION_BAR_HEIGHT = 100;

export default class SortNavigationBar extends React.Component {


    render() {
        return (
            <div style={{ height: SORT_NAVIGATION_BAR_HEIGHT }}>
                <h1>
                    Sorting Algorithms
                </h1>
            </div>
        );
    }
}