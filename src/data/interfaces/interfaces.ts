interface Child {
    text: string;
    bold?: boolean;
    italic?: boolean;
};

interface GreatInterface {
    [key: string]: string | GreatInterface;
}

export interface State {
    type: string;
    children: Child[];
};
