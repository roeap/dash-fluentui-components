import plotly.graph_objects as go
from dash import Dash, dcc, html

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

graph_page = dfc.Page(
    html.Div(
        dcc.Graph(
            id="plotly-graph",
            figure=go.Figure(layout={"template": "plotly_dark"}),
            responsive=True,
            style={"height": "100%"},
        ),
        style={"height": "100%", "with": "0", "flexGrow": 1},
    ),
    page_key="graph",
    label="Graph",
    controls=dialog,
)

card_page = dfc.Page(
    dfc.Card(
        html.Div("Hello World", style={"height": "100%"}),
        header="Header",
        footer=dfc.Button("Action"),
        style={"width": "100%", "display": "flex"},
    ),
    page_key="card",
    label="Card",
    controls=dfc.Button("Control 2"),
)

app.layout = dfc.FluentProvider(
    theme="dark",
    children=dfc.PagesWithSidebar([graph_page, card_page], selected_key="graph"),
)
