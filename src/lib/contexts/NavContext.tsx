import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useReducer,
} from "react";

// export const NavContext = createContext<
//     [string, Dispatch<SetStateAction<string>>]
// >(["/", () => {}]);

type AddSectionOffsetAction = {
    type: "ADD_SECTION_OFFSET";
    payload: {
        id: string;
        offset: number;
    };
};

type UpdateActiveLinkAction = {
    type: "UPDATE_ACTIVE_LINK";
    payload: string;
};

type NavContextAction = AddSectionOffsetAction | UpdateActiveLinkAction;

type NavState = {
    offsets: Array<[string, number]>;
    activeLink: string;
};
const initialState: NavState = {
    offsets: [],
    activeLink: "",
};

type NavContext = NavState & { dispatch: Dispatch<NavContextAction> };

const Context = createContext<NavContext>(initialState as NavContext);

const { Provider } = Context;

export function NavProvider({ children }: { children: ReactNode }) {
    function reducer(state: NavState, action: NavContextAction) {
        const { type, payload } = action;
        switch (type) {
            case "ADD_SECTION_OFFSET": {
                const exists = state.offsets.find(([id]) => id === payload.id);
                if (!exists) {
                    state.offsets.push([payload.id, payload.offset]);
                }
                return state;
            }
            case "UPDATE_ACTIVE_LINK": {
                return { ...state, activeLink: payload };
            }
            default:
                const _exhaustiveCheck: never = action;
                console.error("Unknown action: ", _exhaustiveCheck);
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
}

export default Context;
