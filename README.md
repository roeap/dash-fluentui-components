# dash-fluentui-components

A component library for Plotly's Dash based on the fluentui react components.

## Installation

```sh
poetry add dash-fluentui-components
```

or via pip

```sh
pip install dash-fluentui-components
```

## Usage

```py
from dash import Dash, Input, Output, callback, callback_context
from dash.exceptions import PreventUpdate

import dash_fluentui_components as dfc

app = Dash(__name__)

open_dialog = dfc.Button("OpenDialog", id="open-id")
close_dialog = dfc.Button("CloseDialog", id="close-id")
dialog = dfc.Dialog(
    "Content",
    title="A dialog component",
    trigger=open_dialog,
    trigger_action=close_dialog,
)

page1 = dfc.Page(dfc.Button("Button 1"), page_key="page-1", controls=dialog)
page2 = dfc.Page(dfc.Button("Button 2"), page_key="page-2", controls=dfc.Button("Control 2"))

app.layout = dfc.FluentProvider(theme="dark", children=dfc.PagesWithSidebar([page1, page2], selected_key="page-1"))

if __name__ == "__main__":
    app.run_server(debug=True)

```

## TODO

- [smooth sidebar transitions][smmoth]

[smmoth]: http://reactcommunity.org/react-transition-group/
