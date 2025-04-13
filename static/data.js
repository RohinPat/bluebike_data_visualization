const visualizationData = {
  "hourly_trips": {
    "config": {
      "view": {
        "continuousWidth": 300,
        "continuousHeight": 300,
        "strokeWidth": 0
      },
      "axis": {
        "grid": true,
        "gridColor": "#EEEEEE"
      },
      "title": {
        "offset": 20
      }
    },
    "layer": [
      {
        "mark": {
          "type": "line",
          "color": "#4C78A8",
          "interpolate": "monotone",
          "size": 3
        },
        "encoding": {
          "tooltip": [
            {
              "field": "hour",
              "type": "quantitative"
            },
            {
              "field": "trips",
              "type": "quantitative"
            }
          ],
          "x": {
            "axis": {
              "title": "Hour of Day"
            },
            "field": "hour",
            "scale": {
              "domain": [
                0,
                23
              ]
            },
            "type": "quantitative"
          },
          "y": {
            "axis": {
              "title": "Total Number of Trips"
            },
            "field": "trips",
            "type": "quantitative"
          }
        },
        "title": {
          "text": "Total Bike Trips by Hour of Day",
          "anchor": "middle",
          "fontSize": 20
        }
      },
      {
        "mark": {
          "type": "circle",
          "color": "#4C78A8",
          "opacity": 0.5,
          "size": 50
        },
        "encoding": {
          "tooltip": [
            {
              "field": "hour",
              "type": "quantitative"
            },
            {
              "field": "trips",
              "type": "quantitative"
            }
          ],
          "x": {
            "axis": {
              "title": "Hour of Day"
            },
            "field": "hour",
            "scale": {
              "domain": [
                0,
                23
              ]
            },
            "type": "quantitative"
          },
          "y": {
            "axis": {
              "title": "Total Number of Trips"
            },
            "field": "trips",
            "type": "quantitative"
          }
        },
        "title": {
          "text": "Total Bike Trips by Hour of Day",
          "anchor": "middle",
          "fontSize": 20
        }
      }
    ],
    "data": {
      "name": "data-9f65394040457edc97bd4ea0f35bd413"
    },
    "height": 400,
    "width": 800,
    "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json",
    "datasets": {
      "data-9f65394040457edc97bd4ea0f35bd413": [
        {
          "hour": 0,
          "trips": 85
        },
        {
          "hour": 1,
          "trips": 60
        },
        {
          "hour": 2,
          "trips": 40
        },
        {
          "hour": 3,
          "trips": 10
        },
        {
          "hour": 4,
          "trips": 32
        },
        {
          "hour": 5,
          "trips": 54
        },
        {
          "hour": 6,
          "trips": 199
        },
        {
          "hour": 7,
          "trips": 528
        },
        {
          "hour": 8,
          "trips": 936
        },
        {
          "hour": 9,
          "trips": 649
        },
        {
          "hour": 10,
          "trips": 464
        },
        {
          "hour": 11,
          "trips": 449
        },
        {
          "hour": 12,
          "trips": 544
        },
        {
          "hour": 13,
          "trips": 538
        },
        {
          "hour": 14,
          "trips": 570
        },
        {
          "hour": 15,
          "trips": 681
        },
        {
          "hour": 16,
          "trips": 898
        },
        {
          "hour": 17,
          "trips": 1025
        },
        {
          "hour": 18,
          "trips": 765
        },
        {
          "hour": 19,
          "trips": 518
        },
        {
          "hour": 20,
          "trips": 394
        },
        {
          "hour": 21,
          "trips": 252
        },
        {
          "hour": 22,
          "trips": 188
        },
        {
          "hour": 23,
          "trips": 115
        }
      ]
    }
  },
  "heatmap": {
    "data": [
      {
        "coloraxis": "coloraxis",
        "name": "0",
        "x": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        "y": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "z": [
          [
            6.0,
            4.0,
            1.0,
            0.0,
            3.0,
            8.0,
            39.0,
            81.0,
            132.0,
            77.0,
            46.0,
            36.0,
            59.0,
            47.0,
            77.0,
            93.0,
            146.0,
            163.0,
            110.0,
            77.0,
            47.0,
            30.0,
            27.0,
            10.0
          ],
          [
            5.0,
            5.0,
            3.0,
            0.0,
            3.0,
            10.0,
            35.0,
            116.0,
            180.0,
            115.0,
            49.0,
            58.0,
            42.0,
            56.0,
            71.0,
            87.0,
            116.0,
            191.0,
            135.0,
            99.0,
            63.0,
            36.0,
            18.0,
            15.0
          ],
          [
            26.0,
            15.0,
            4.0,
            1.0,
            7.0,
            5.0,
            39.0,
            99.0,
            199.0,
            104.0,
            73.0,
            57.0,
            80.0,
            68.0,
            69.0,
            94.0,
            147.0,
            176.0,
            132.0,
            80.0,
            67.0,
            39.0,
            34.0,
            17.0
          ],
          [
            4.0,
            5.0,
            2.0,
            0.0,
            3.0,
            14.0,
            30.0,
            105.0,
            198.0,
            119.0,
            89.0,
            71.0,
            89.0,
            84.0,
            89.0,
            110.0,
            163.0,
            214.0,
            167.0,
            99.0,
            75.0,
            42.0,
            30.0,
            20.0
          ],
          [
            8.0,
            4.0,
            8.0,
            3.0,
            7.0,
            11.0,
            28.0,
            103.0,
            172.0,
            135.0,
            70.0,
            77.0,
            92.0,
            99.0,
            82.0,
            130.0,
            179.0,
            162.0,
            118.0,
            94.0,
            71.0,
            56.0,
            34.0,
            22.0
          ],
          [
            19.0,
            16.0,
            14.0,
            2.0,
            6.0,
            2.0,
            14.0,
            12.0,
            25.0,
            48.0,
            67.0,
            71.0,
            78.0,
            85.0,
            78.0,
            73.0,
            69.0,
            53.0,
            38.0,
            33.0,
            38.0,
            20.0,
            28.0,
            18.0
          ],
          [
            17.0,
            11.0,
            8.0,
            4.0,
            3.0,
            4.0,
            14.0,
            12.0,
            30.0,
            51.0,
            70.0,
            79.0,
            104.0,
            99.0,
            104.0,
            94.0,
            78.0,
            66.0,
            65.0,
            36.0,
            33.0,
            29.0,
            17.0,
            13.0
          ]
        ],
        "type": "heatmap",
        "xaxis": "x",
        "yaxis": "y",
        "hovertemplate": "Hour of Day: %{x}<br>Day of Week: %{y}<br>Number of Trips: %{z}<extra></extra>"
      }
    ],
    "layout": {
      "template": {
        "data": {
          "histogram2dcontour": [
            {
              "type": "histogram2dcontour",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "choropleth": [
            {
              "type": "choropleth",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            }
          ],
          "histogram2d": [
            {
              "type": "histogram2d",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "heatmap": [
            {
              "type": "heatmap",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "heatmapgl": [
            {
              "type": "heatmapgl",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "contourcarpet": [
            {
              "type": "contourcarpet",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            }
          ],
          "contour": [
            {
              "type": "contour",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "surface": [
            {
              "type": "surface",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "mesh3d": [
            {
              "type": "mesh3d",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            }
          ],
          "scatter": [
            {
              "fillpattern": {
                "fillmode": "overlay",
                "size": 10,
                "solidity": 0.2
              },
              "type": "scatter"
            }
          ],
          "parcoords": [
            {
              "type": "parcoords",
              "line": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatterpolargl": [
            {
              "type": "scatterpolargl",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "bar": [
            {
              "error_x": {
                "color": "#2a3f5f"
              },
              "error_y": {
                "color": "#2a3f5f"
              },
              "marker": {
                "line": {
                  "color": "#E5ECF6",
                  "width": 0.5
                },
                "pattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                }
              },
              "type": "bar"
            }
          ],
          "scattergeo": [
            {
              "type": "scattergeo",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatterpolar": [
            {
              "type": "scatterpolar",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "histogram": [
            {
              "marker": {
                "pattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                }
              },
              "type": "histogram"
            }
          ],
          "scattergl": [
            {
              "type": "scattergl",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatter3d": [
            {
              "type": "scatter3d",
              "line": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              },
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scattermapbox": [
            {
              "type": "scattermapbox",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatterternary": [
            {
              "type": "scatterternary",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scattercarpet": [
            {
              "type": "scattercarpet",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "carpet": [
            {
              "aaxis": {
                "endlinecolor": "#2a3f5f",
                "gridcolor": "white",
                "linecolor": "white",
                "minorgridcolor": "white",
                "startlinecolor": "#2a3f5f"
              },
              "baxis": {
                "endlinecolor": "#2a3f5f",
                "gridcolor": "white",
                "linecolor": "white",
                "minorgridcolor": "white",
                "startlinecolor": "#2a3f5f"
              },
              "type": "carpet"
            }
          ],
          "table": [
            {
              "cells": {
                "fill": {
                  "color": "#EBF0F8"
                },
                "line": {
                  "color": "white"
                }
              },
              "header": {
                "fill": {
                  "color": "#C8D4E3"
                },
                "line": {
                  "color": "white"
                }
              },
              "type": "table"
            }
          ],
          "barpolar": [
            {
              "marker": {
                "line": {
                  "color": "#E5ECF6",
                  "width": 0.5
                },
                "pattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                }
              },
              "type": "barpolar"
            }
          ],
          "pie": [
            {
              "automargin": true,
              "type": "pie"
            }
          ]
        },
        "layout": {
          "autotypenumbers": "strict",
          "colorway": [
            "#636efa",
            "#EF553B",
            "#00cc96",
            "#ab63fa",
            "#FFA15A",
            "#19d3f3",
            "#FF6692",
            "#B6E880",
            "#FF97FF",
            "#FECB52"
          ],
          "font": {
            "color": "#2a3f5f"
          },
          "hovermode": "closest",
          "hoverlabel": {
            "align": "left"
          },
          "paper_bgcolor": "white",
          "plot_bgcolor": "#E5ECF6",
          "polar": {
            "bgcolor": "#E5ECF6",
            "angularaxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            },
            "radialaxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            }
          },
          "ternary": {
            "bgcolor": "#E5ECF6",
            "aaxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            },
            "baxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            },
            "caxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            }
          },
          "coloraxis": {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            }
          },
          "colorscale": {
            "sequential": [
              [
                0.0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1.0,
                "#f0f921"
              ]
            ],
            "sequentialminus": [
              [
                0.0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1.0,
                "#f0f921"
              ]
            ],
            "diverging": [
              [
                0,
                "#8e0152"
              ],
              [
                0.1,
                "#c51b7d"
              ],
              [
                0.2,
                "#de77ae"
              ],
              [
                0.3,
                "#f1b6da"
              ],
              [
                0.4,
                "#fde0ef"
              ],
              [
                0.5,
                "#f7f7f7"
              ],
              [
                0.6,
                "#e6f5d0"
              ],
              [
                0.7,
                "#b8e186"
              ],
              [
                0.8,
                "#7fbc41"
              ],
              [
                0.9,
                "#4d9221"
              ],
              [
                1,
                "#276419"
              ]
            ]
          },
          "xaxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": "",
            "title": {
              "standoff": 15
            },
            "zerolinecolor": "white",
            "automargin": true,
            "zerolinewidth": 2
          },
          "yaxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": "",
            "title": {
              "standoff": 15
            },
            "zerolinecolor": "white",
            "automargin": true,
            "zerolinewidth": 2
          },
          "scene": {
            "xaxis": {
              "backgroundcolor": "#E5ECF6",
              "gridcolor": "white",
              "linecolor": "white",
              "showbackground": true,
              "ticks": "",
              "zerolinecolor": "white",
              "gridwidth": 2
            },
            "yaxis": {
              "backgroundcolor": "#E5ECF6",
              "gridcolor": "white",
              "linecolor": "white",
              "showbackground": true,
              "ticks": "",
              "zerolinecolor": "white",
              "gridwidth": 2
            },
            "zaxis": {
              "backgroundcolor": "#E5ECF6",
              "gridcolor": "white",
              "linecolor": "white",
              "showbackground": true,
              "ticks": "",
              "zerolinecolor": "white",
              "gridwidth": 2
            }
          },
          "shapedefaults": {
            "line": {
              "color": "#2a3f5f"
            }
          },
          "annotationdefaults": {
            "arrowcolor": "#2a3f5f",
            "arrowhead": 0,
            "arrowwidth": 1
          },
          "geo": {
            "bgcolor": "white",
            "landcolor": "#E5ECF6",
            "subunitcolor": "white",
            "showland": true,
            "showlakes": true,
            "lakecolor": "white"
          },
          "title": {
            "x": 0.05
          },
          "mapbox": {
            "style": "light"
          }
        }
      },
      "xaxis": {
        "anchor": "y",
        "domain": [
          0.0,
          1.0
        ],
        "constrain": "domain",
        "title": {
          "text": "Hour of Day"
        },
        "tickmode": "linear",
        "tick0": 0,
        "dtick": 1,
        "ticktext": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        "tickvals": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ]
      },
      "yaxis": {
        "anchor": "x",
        "domain": [
          0.0,
          1.0
        ],
        "autorange": "reversed",
        "constrain": "domain",
        "title": {
          "text": "Day of Week"
        },
        "categoryorder": "array",
        "categoryarray": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ]
      },
      "coloraxis": {
        "colorbar": {
          "title": {
            "text": "Number of Trips"
          }
        },
        "colorscale": [
          [
            0.0,
            "rgb(255,255,204)"
          ],
          [
            0.125,
            "rgb(255,237,160)"
          ],
          [
            0.25,
            "rgb(254,217,118)"
          ],
          [
            0.375,
            "rgb(254,178,76)"
          ],
          [
            0.5,
            "rgb(253,141,60)"
          ],
          [
            0.625,
            "rgb(252,78,42)"
          ],
          [
            0.75,
            "rgb(227,26,28)"
          ],
          [
            0.875,
            "rgb(189,0,38)"
          ],
          [
            1.0,
            "rgb(128,0,38)"
          ]
        ]
      },
      "title": {
        "text": "Trip Distribution by Day and Hour"
      }
    }
  },
  "station_popularity": {
    "data": [
      {
        "alignmentgroup": "True",
        "hovertemplate": "Number of Trips=%{x}<br>Station Name=%{y}<extra></extra>",
        "legendgroup": "",
        "marker": {
          "color": "#636efa",
          "pattern": {
            "shape": ""
          }
        },
        "name": "",
        "offsetgroup": "",
        "orientation": "h",
        "showlegend": false,
        "textposition": "auto",
        "x": [
          214,
          170,
          131,
          126,
          114,
          113,
          106,
          93,
          89,
          88
        ],
        "xaxis": "x",
        "y": [
          "MIT @ Mass Ave / Amherst St",
          "Central Square @ Mass Ave / Essex St",
          "Vassar St",
          "Massachusetts Ave at Boylston St.",
          "MIT Pacific",
          "MIT Stata Center @ Vassar / Main St",
          "Charles Circle - Charles St at Cambridge St",
          "Harvard Square @ Mass Ave/ Dunster",
          "South Station - 700 Atlantic Ave",
          "Mass Ave at Albany St"
        ],
        "yaxis": "y",
        "type": "bar"
      }
    ],
    "layout": {
      "template": {
        "data": {
          "histogram2dcontour": [
            {
              "type": "histogram2dcontour",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "choropleth": [
            {
              "type": "choropleth",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            }
          ],
          "histogram2d": [
            {
              "type": "histogram2d",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "heatmap": [
            {
              "type": "heatmap",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "heatmapgl": [
            {
              "type": "heatmapgl",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "contourcarpet": [
            {
              "type": "contourcarpet",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            }
          ],
          "contour": [
            {
              "type": "contour",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "surface": [
            {
              "type": "surface",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "mesh3d": [
            {
              "type": "mesh3d",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            }
          ],
          "scatter": [
            {
              "fillpattern": {
                "fillmode": "overlay",
                "size": 10,
                "solidity": 0.2
              },
              "type": "scatter"
            }
          ],
          "parcoords": [
            {
              "type": "parcoords",
              "line": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatterpolargl": [
            {
              "type": "scatterpolargl",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "bar": [
            {
              "error_x": {
                "color": "#2a3f5f"
              },
              "error_y": {
                "color": "#2a3f5f"
              },
              "marker": {
                "line": {
                  "color": "#E5ECF6",
                  "width": 0.5
                },
                "pattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                }
              },
              "type": "bar"
            }
          ],
          "scattergeo": [
            {
              "type": "scattergeo",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatterpolar": [
            {
              "type": "scatterpolar",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "histogram": [
            {
              "marker": {
                "pattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                }
              },
              "type": "histogram"
            }
          ],
          "scattergl": [
            {
              "type": "scattergl",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatter3d": [
            {
              "type": "scatter3d",
              "line": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              },
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scattermapbox": [
            {
              "type": "scattermapbox",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatterternary": [
            {
              "type": "scatterternary",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scattercarpet": [
            {
              "type": "scattercarpet",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "carpet": [
            {
              "aaxis": {
                "endlinecolor": "#2a3f5f",
                "gridcolor": "white",
                "linecolor": "white",
                "minorgridcolor": "white",
                "startlinecolor": "#2a3f5f"
              },
              "baxis": {
                "endlinecolor": "#2a3f5f",
                "gridcolor": "white",
                "linecolor": "white",
                "minorgridcolor": "white",
                "startlinecolor": "#2a3f5f"
              },
              "type": "carpet"
            }
          ],
          "table": [
            {
              "cells": {
                "fill": {
                  "color": "#EBF0F8"
                },
                "line": {
                  "color": "white"
                }
              },
              "header": {
                "fill": {
                  "color": "#C8D4E3"
                },
                "line": {
                  "color": "white"
                }
              },
              "type": "table"
            }
          ],
          "barpolar": [
            {
              "marker": {
                "line": {
                  "color": "#E5ECF6",
                  "width": 0.5
                },
                "pattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                }
              },
              "type": "barpolar"
            }
          ],
          "pie": [
            {
              "automargin": true,
              "type": "pie"
            }
          ]
        },
        "layout": {
          "autotypenumbers": "strict",
          "colorway": [
            "#636efa",
            "#EF553B",
            "#00cc96",
            "#ab63fa",
            "#FFA15A",
            "#19d3f3",
            "#FF6692",
            "#B6E880",
            "#FF97FF",
            "#FECB52"
          ],
          "font": {
            "color": "#2a3f5f"
          },
          "hovermode": "closest",
          "hoverlabel": {
            "align": "left"
          },
          "paper_bgcolor": "white",
          "plot_bgcolor": "#E5ECF6",
          "polar": {
            "bgcolor": "#E5ECF6",
            "angularaxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            },
            "radialaxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            }
          },
          "ternary": {
            "bgcolor": "#E5ECF6",
            "aaxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            },
            "baxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            },
            "caxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            }
          },
          "coloraxis": {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            }
          },
          "colorscale": {
            "sequential": [
              [
                0.0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1.0,
                "#f0f921"
              ]
            ],
            "sequentialminus": [
              [
                0.0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1.0,
                "#f0f921"
              ]
            ],
            "diverging": [
              [
                0,
                "#8e0152"
              ],
              [
                0.1,
                "#c51b7d"
              ],
              [
                0.2,
                "#de77ae"
              ],
              [
                0.3,
                "#f1b6da"
              ],
              [
                0.4,
                "#fde0ef"
              ],
              [
                0.5,
                "#f7f7f7"
              ],
              [
                0.6,
                "#e6f5d0"
              ],
              [
                0.7,
                "#b8e186"
              ],
              [
                0.8,
                "#7fbc41"
              ],
              [
                0.9,
                "#4d9221"
              ],
              [
                1,
                "#276419"
              ]
            ]
          },
          "xaxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": "",
            "title": {
              "standoff": 15
            },
            "zerolinecolor": "white",
            "automargin": true,
            "zerolinewidth": 2
          },
          "yaxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": "",
            "title": {
              "standoff": 15
            },
            "zerolinecolor": "white",
            "automargin": true,
            "zerolinewidth": 2
          },
          "scene": {
            "xaxis": {
              "backgroundcolor": "#E5ECF6",
              "gridcolor": "white",
              "linecolor": "white",
              "showbackground": true,
              "ticks": "",
              "zerolinecolor": "white",
              "gridwidth": 2
            },
            "yaxis": {
              "backgroundcolor": "#E5ECF6",
              "gridcolor": "white",
              "linecolor": "white",
              "showbackground": true,
              "ticks": "",
              "zerolinecolor": "white",
              "gridwidth": 2
            },
            "zaxis": {
              "backgroundcolor": "#E5ECF6",
              "gridcolor": "white",
              "linecolor": "white",
              "showbackground": true,
              "ticks": "",
              "zerolinecolor": "white",
              "gridwidth": 2
            }
          },
          "shapedefaults": {
            "line": {
              "color": "#2a3f5f"
            }
          },
          "annotationdefaults": {
            "arrowcolor": "#2a3f5f",
            "arrowhead": 0,
            "arrowwidth": 1
          },
          "geo": {
            "bgcolor": "white",
            "landcolor": "#E5ECF6",
            "subunitcolor": "white",
            "showland": true,
            "showlakes": true,
            "lakecolor": "white"
          },
          "title": {
            "x": 0.05
          },
          "mapbox": {
            "style": "light"
          }
        }
      },
      "xaxis": {
        "anchor": "y",
        "domain": [
          0.0,
          1.0
        ],
        "title": {
          "text": "Number of Trips"
        },
        "constrain": "domain"
      },
      "yaxis": {
        "anchor": "x",
        "domain": [
          0.0,
          1.0
        ],
        "title": {
          "text": "Station Name"
        },
        "constrain": "domain",
        "autorange": "reversed"
      },
      "legend": {
        "tracegroupgap": 0
      },
      "title": {
        "text": "Top 10 Most Popular Starting Stations"
      },
      "barmode": "relative"
    }
  },
  "popular_routes": {
    "data": [
      {
        "alignmentgroup": "True",
        "hovertemplate": "Number of Trips=%{x}<br>Route=%{y}<br>Average Duration (min)=%{marker.color}<extra></extra>",
        "legendgroup": "",
        "marker": {
          "color": [
            6.433813492063492,
            5.890088095238095,
            6.7768500000000005,
            4.64651,
            7.747052380952382,
            5.007995238095238,
            8.157516666666666,
            6.945027777777778,
            8.063425757575757,
            5.944937878787879
          ],
          "coloraxis": "coloraxis",
          "pattern": {
            "shape": ""
          }
        },
        "name": "",
        "offsetgroup": "",
        "orientation": "h",
        "showlegend": false,
        "textposition": "auto",
        "x": [
          21,
          21,
          17,
          15,
          14,
          14,
          13,
          12,
          11,
          11
        ],
        "xaxis": "x",
        "y": [
          "Vassar St \u2192 MIT Stata Center @ Vassar / Main St",
          "MIT @ Mass Ave / Amherst St \u2192 Central Square @ Mass Ave / Essex St",
          "MIT @ Mass Ave / Amherst St \u2192 Vassar St",
          "Central Square @ Mass Ave / Essex St \u2192 MIT Pacific",
          "Vassar St \u2192 MIT Carleton St @ Amherst",
          "Vassar St \u2192 MIT @ Mass Ave / Amherst St",
          "MIT Stata Center @ Vassar / Main St \u2192 Vassar St",
          "Lower Cambridgeport at Magazine St / Riverside Rd \u2192 Vassar St",
          "Central Square @ Mass Ave / Essex St \u2192 Vassar St",
          "Central Square @ Mass Ave / Essex St \u2192 MIT @ Mass Ave / Amherst St"
        ],
        "yaxis": "y",
        "type": "bar"
      }
    ],
    "layout": {
      "template": {
        "data": {
          "histogram2dcontour": [
            {
              "type": "histogram2dcontour",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "choropleth": [
            {
              "type": "choropleth",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            }
          ],
          "histogram2d": [
            {
              "type": "histogram2d",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "heatmap": [
            {
              "type": "heatmap",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "heatmapgl": [
            {
              "type": "heatmapgl",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "contourcarpet": [
            {
              "type": "contourcarpet",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            }
          ],
          "contour": [
            {
              "type": "contour",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "surface": [
            {
              "type": "surface",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              },
              "colorscale": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            }
          ],
          "mesh3d": [
            {
              "type": "mesh3d",
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            }
          ],
          "scatter": [
            {
              "fillpattern": {
                "fillmode": "overlay",
                "size": 10,
                "solidity": 0.2
              },
              "type": "scatter"
            }
          ],
          "parcoords": [
            {
              "type": "parcoords",
              "line": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatterpolargl": [
            {
              "type": "scatterpolargl",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "bar": [
            {
              "error_x": {
                "color": "#2a3f5f"
              },
              "error_y": {
                "color": "#2a3f5f"
              },
              "marker": {
                "line": {
                  "color": "#E5ECF6",
                  "width": 0.5
                },
                "pattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                }
              },
              "type": "bar"
            }
          ],
          "scattergeo": [
            {
              "type": "scattergeo",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatterpolar": [
            {
              "type": "scatterpolar",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "histogram": [
            {
              "marker": {
                "pattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                }
              },
              "type": "histogram"
            }
          ],
          "scattergl": [
            {
              "type": "scattergl",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatter3d": [
            {
              "type": "scatter3d",
              "line": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              },
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scattermapbox": [
            {
              "type": "scattermapbox",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scatterternary": [
            {
              "type": "scatterternary",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "scattercarpet": [
            {
              "type": "scattercarpet",
              "marker": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }
            }
          ],
          "carpet": [
            {
              "aaxis": {
                "endlinecolor": "#2a3f5f",
                "gridcolor": "white",
                "linecolor": "white",
                "minorgridcolor": "white",
                "startlinecolor": "#2a3f5f"
              },
              "baxis": {
                "endlinecolor": "#2a3f5f",
                "gridcolor": "white",
                "linecolor": "white",
                "minorgridcolor": "white",
                "startlinecolor": "#2a3f5f"
              },
              "type": "carpet"
            }
          ],
          "table": [
            {
              "cells": {
                "fill": {
                  "color": "#EBF0F8"
                },
                "line": {
                  "color": "white"
                }
              },
              "header": {
                "fill": {
                  "color": "#C8D4E3"
                },
                "line": {
                  "color": "white"
                }
              },
              "type": "table"
            }
          ],
          "barpolar": [
            {
              "marker": {
                "line": {
                  "color": "#E5ECF6",
                  "width": 0.5
                },
                "pattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                }
              },
              "type": "barpolar"
            }
          ],
          "pie": [
            {
              "automargin": true,
              "type": "pie"
            }
          ]
        },
        "layout": {
          "autotypenumbers": "strict",
          "colorway": [
            "#636efa",
            "#EF553B",
            "#00cc96",
            "#ab63fa",
            "#FFA15A",
            "#19d3f3",
            "#FF6692",
            "#B6E880",
            "#FF97FF",
            "#FECB52"
          ],
          "font": {
            "color": "#2a3f5f"
          },
          "hovermode": "closest",
          "hoverlabel": {
            "align": "left"
          },
          "paper_bgcolor": "white",
          "plot_bgcolor": "#E5ECF6",
          "polar": {
            "bgcolor": "#E5ECF6",
            "angularaxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            },
            "radialaxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            }
          },
          "ternary": {
            "bgcolor": "#E5ECF6",
            "aaxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            },
            "baxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            },
            "caxis": {
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": ""
            }
          },
          "coloraxis": {
            "colorbar": {
              "outlinewidth": 0,
              "ticks": ""
            }
          },
          "colorscale": {
            "sequential": [
              [
                0.0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1.0,
                "#f0f921"
              ]
            ],
            "sequentialminus": [
              [
                0.0,
                "#0d0887"
              ],
              [
                0.1111111111111111,
                "#46039f"
              ],
              [
                0.2222222222222222,
                "#7201a8"
              ],
              [
                0.3333333333333333,
                "#9c179e"
              ],
              [
                0.4444444444444444,
                "#bd3786"
              ],
              [
                0.5555555555555556,
                "#d8576b"
              ],
              [
                0.6666666666666666,
                "#ed7953"
              ],
              [
                0.7777777777777778,
                "#fb9f3a"
              ],
              [
                0.8888888888888888,
                "#fdca26"
              ],
              [
                1.0,
                "#f0f921"
              ]
            ],
            "diverging": [
              [
                0,
                "#8e0152"
              ],
              [
                0.1,
                "#c51b7d"
              ],
              [
                0.2,
                "#de77ae"
              ],
              [
                0.3,
                "#f1b6da"
              ],
              [
                0.4,
                "#fde0ef"
              ],
              [
                0.5,
                "#f7f7f7"
              ],
              [
                0.6,
                "#e6f5d0"
              ],
              [
                0.7,
                "#b8e186"
              ],
              [
                0.8,
                "#7fbc41"
              ],
              [
                0.9,
                "#4d9221"
              ],
              [
                1,
                "#276419"
              ]
            ]
          },
          "xaxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": "",
            "title": {
              "standoff": 15
            },
            "zerolinecolor": "white",
            "automargin": true,
            "zerolinewidth": 2
          },
          "yaxis": {
            "gridcolor": "white",
            "linecolor": "white",
            "ticks": "",
            "title": {
              "standoff": 15
            },
            "zerolinecolor": "white",
            "automargin": true,
            "zerolinewidth": 2
          },
          "scene": {
            "xaxis": {
              "backgroundcolor": "#E5ECF6",
              "gridcolor": "white",
              "linecolor": "white",
              "showbackground": true,
              "ticks": "",
              "zerolinecolor": "white",
              "gridwidth": 2
            },
            "yaxis": {
              "backgroundcolor": "#E5ECF6",
              "gridcolor": "white",
              "linecolor": "white",
              "showbackground": true,
              "ticks": "",
              "zerolinecolor": "white",
              "gridwidth": 2
            },
            "zaxis": {
              "backgroundcolor": "#E5ECF6",
              "gridcolor": "white",
              "linecolor": "white",
              "showbackground": true,
              "ticks": "",
              "zerolinecolor": "white",
              "gridwidth": 2
            }
          },
          "shapedefaults": {
            "line": {
              "color": "#2a3f5f"
            }
          },
          "annotationdefaults": {
            "arrowcolor": "#2a3f5f",
            "arrowhead": 0,
            "arrowwidth": 1
          },
          "geo": {
            "bgcolor": "white",
            "landcolor": "#E5ECF6",
            "subunitcolor": "white",
            "showland": true,
            "showlakes": true,
            "lakecolor": "white"
          },
          "title": {
            "x": 0.05
          },
          "mapbox": {
            "style": "light"
          }
        }
      },
      "xaxis": {
        "anchor": "y",
        "domain": [
          0.0,
          1.0
        ],
        "title": {
          "text": "Number of Trips"
        },
        "constrain": "domain"
      },
      "yaxis": {
        "anchor": "x",
        "domain": [
          0.0,
          1.0
        ],
        "title": {
          "text": "Route"
        },
        "constrain": "domain",
        "autorange": "reversed"
      },
      "coloraxis": {
        "colorbar": {
          "title": {
            "text": "Average Duration (min)"
          }
        },
        "colorscale": [
          [
            0.0,
            "#440154"
          ],
          [
            0.1111111111111111,
            "#482878"
          ],
          [
            0.2222222222222222,
            "#3e4989"
          ],
          [
            0.3333333333333333,
            "#31688e"
          ],
          [
            0.4444444444444444,
            "#26828e"
          ],
          [
            0.5555555555555556,
            "#1f9e89"
          ],
          [
            0.6666666666666666,
            "#35b779"
          ],
          [
            0.7777777777777778,
            "#6ece58"
          ],
          [
            0.8888888888888888,
            "#b5de2b"
          ],
          [
            1.0,
            "#fde725"
          ]
        ]
      },
      "legend": {
        "tracegroupgap": 0
      },
      "title": {
        "text": "Most Popular Bike Routes"
      },
      "barmode": "relative"
    }
  },
  "d3_station_data": [
    {
      "name": "101 Smith Place",
      "lat": 42.3926,
      "lng": -71.1508,
      "trips": 1
    },
    {
      "name": "1200 Beacon St",
      "lat": 42.344,
      "lng": -71.1151,
      "trips": 26
    },
    {
      "name": "160 Arsenal St",
      "lat": 42.3647,
      "lng": -71.1757,
      "trips": 2
    },
    {
      "name": "175 N Harvard St",
      "lat": 42.3645,
      "lng": -71.1284,
      "trips": 27
    },
    {
      "name": "191 Beacon St",
      "lat": 42.3803,
      "lng": -71.1088,
      "trips": 33
    },
    {
      "name": "30 Dane St",
      "lat": 42.381,
      "lng": -71.104,
      "trips": 43
    },
    {
      "name": "325 Binney St.",
      "lat": 42.3672,
      "lng": -71.089,
      "trips": 39
    },
    {
      "name": "359 Broadway - Broadway at Fayette Street",
      "lat": 42.3708,
      "lng": -71.1044,
      "trips": 41
    },
    {
      "name": "40 Thorndike St",
      "lat": 42.369,
      "lng": -71.08,
      "trips": 17
    },
    {
      "name": "55 Wheeler Street",
      "lat": 42.3908,
      "lng": -71.1439,
      "trips": 18
    },
    {
      "name": "606 American Legion Hwy at Canterbury St",
      "lat": 42.2858,
      "lng": -71.1097,
      "trips": 1
    },
    {
      "name": "615 Broadway",
      "lat": 42.3945,
      "lng": -71.0308,
      "trips": 1
    },
    {
      "name": "645 Summer St",
      "lat": 42.3418,
      "lng": -71.0399,
      "trips": 6
    },
    {
      "name": "699 Mt Auburn St",
      "lat": 42.375,
      "lng": -71.1487,
      "trips": 18
    },
    {
      "name": "7 Acre Park",
      "lat": 42.4114,
      "lng": -71.0682,
      "trips": 3
    },
    {
      "name": "700 Commonwealth Ave.",
      "lat": 42.3496,
      "lng": -71.1039,
      "trips": 22
    },
    {
      "name": "700 Huron Ave",
      "lat": 42.3808,
      "lng": -71.1541,
      "trips": 3
    },
    {
      "name": "75 Binney St",
      "lat": 42.3655,
      "lng": -71.0801,
      "trips": 28
    },
    {
      "name": "780 Morrissey Blvd",
      "lat": 42.2953,
      "lng": -71.0472,
      "trips": 1
    },
    {
      "name": "84 Cambridgepark Dr",
      "lat": 42.3936,
      "lng": -71.1439,
      "trips": 1
    },
    {
      "name": "87-101 Cambridgepark Drive",
      "lat": 42.3952,
      "lng": -71.1442,
      "trips": 8
    },
    {
      "name": "955 Mass Ave",
      "lat": 42.369,
      "lng": -71.11,
      "trips": 66
    },
    {
      "name": "99 Coolidge Ave",
      "lat": 42.3637,
      "lng": -71.1518,
      "trips": 1
    },
    {
      "name": "Airport T Stop - Bremen St at Brooks St",
      "lat": 42.3756,
      "lng": -71.0312,
      "trips": 5
    },
    {
      "name": "Albany St at E. Brookline St",
      "lat": 42.3367,
      "lng": -71.069,
      "trips": 23
    },
    {
      "name": "Alewife MBTA at Steel Place",
      "lat": 42.3956,
      "lng": -71.1426,
      "trips": 25
    },
    {
      "name": "Alewife Station at Russell Field",
      "lat": 42.3962,
      "lng": -71.1398,
      "trips": 9
    },
    {
      "name": "American Legion Hwy at Cummins Hwy",
      "lat": 42.2788,
      "lng": -71.1169,
      "trips": 4
    },
    {
      "name": "Ames St at Broadway",
      "lat": 42.3637,
      "lng": -71.0876,
      "trips": 47
    },
    {
      "name": "Ames St @ Main",
      "lat": 42.3625,
      "lng": -71.0882,
      "trips": 81
    },
    {
      "name": "Aquarium T Stop - 200 Atlantic Ave",
      "lat": 42.3604,
      "lng": -71.0504,
      "trips": 13
    },
    {
      "name": "Arsenal Yards",
      "lat": 42.3628,
      "lng": -71.1578,
      "trips": 14
    },
    {
      "name": "Arsenal on the Charles",
      "lat": 42.3635,
      "lng": -71.1642,
      "trips": 4
    },
    {
      "name": "Ashmont T Stop",
      "lat": 42.2857,
      "lng": -71.0641,
      "trips": 3
    },
    {
      "name": "Assembly Square T",
      "lat": 42.3922,
      "lng": -71.0775,
      "trips": 5
    },
    {
      "name": "Au Bon Pain Way at Fid Kennedy Ave",
      "lat": 42.3462,
      "lng": -71.0292,
      "trips": 1
    },
    {
      "name": "Auburn St. at Mystic River",
      "lat": 42.4176,
      "lng": -71.1261,
      "trips": 2
    },
    {
      "name": "B.U. Central - 725 Comm. Ave.",
      "lat": 42.3504,
      "lng": -71.1083,
      "trips": 25
    },
    {
      "name": "Back Bay T Stop - Dartmouth St at Stuart St",
      "lat": 42.3481,
      "lng": -71.0766,
      "trips": 50
    },
    {
      "name": "Ball Sq",
      "lat": 42.3994,
      "lng": -71.1111,
      "trips": 11
    },
    {
      "name": "Bartlett St at John Elliot Sq",
      "lat": 42.3295,
      "lng": -71.0902,
      "trips": 8
    },
    {
      "name": "Beach St at Freeport St",
      "lat": 42.3037,
      "lng": -71.0543,
      "trips": 3
    },
    {
      "name": "Beacon St at Charles St",
      "lat": 42.3561,
      "lng": -71.0698,
      "trips": 39
    },
    {
      "name": "Beacon St at Tappan St",
      "lat": 42.3383,
      "lng": -71.1389,
      "trips": 12
    },
    {
      "name": "Beacon St at Washington / Kirkland",
      "lat": 42.3788,
      "lng": -71.1071,
      "trips": 27
    },
    {
      "name": "Belgrade Ave at Walworth St",
      "lat": 42.2863,
      "lng": -71.1367,
      "trips": 2
    },
    {
      "name": "Bennington St at Byron St",
      "lat": 42.3835,
      "lng": -71.0162,
      "trips": 4
    },
    {
      "name": "Bennington St at Constitution Beach",
      "lat": 42.3852,
      "lng": -71.0106,
      "trips": 1
    },
    {
      "name": "Bennington St at Marion St",
      "lat": 42.3759,
      "lng": -71.036,
      "trips": 2
    },
    {
      "name": "Berkshire Street at Cambridge Street",
      "lat": 42.3721,
      "lng": -71.09,
      "trips": 41
    },
    {
      "name": "Binney St / Sixth St",
      "lat": 42.3661,
      "lng": -71.0863,
      "trips": 28
    },
    {
      "name": "Boston City Hall - 28 State St",
      "lat": 42.3589,
      "lng": -71.0576,
      "trips": 66
    },
    {
      "name": "Boston College T",
      "lat": 42.3399,
      "lng": -71.1671,
      "trips": 7
    },
    {
      "name": "Boston Convention and Exhibition Center - Summer St at West Side Dr",
      "lat": 42.3478,
      "lng": -71.0454,
      "trips": 15
    },
    {
      "name": "Boston Landing",
      "lat": 42.3566,
      "lng": -71.1417,
      "trips": 13
    },
    {
      "name": "Boston Public Market - Surface Rd at Sudbury St",
      "lat": 42.3626,
      "lng": -71.0575,
      "trips": 3
    },
    {
      "name": "Bowdoin St at Quincy St",
      "lat": 42.3079,
      "lng": -71.0651,
      "trips": 9
    },
    {
      "name": "Boylston St at Arlington St",
      "lat": 42.3525,
      "lng": -71.0678,
      "trips": 23
    },
    {
      "name": "Boylston St at Berkeley St",
      "lat": 42.3511,
      "lng": -71.0733,
      "trips": 74
    },
    {
      "name": "Boylston St at Exeter St",
      "lat": 42.3496,
      "lng": -71.0795,
      "trips": 37
    },
    {
      "name": "Boylston St at Fairfield St",
      "lat": 42.3488,
      "lng": -71.0824,
      "trips": 85
    },
    {
      "name": "Boylston St at Jersey St",
      "lat": 42.3447,
      "lng": -71.0973,
      "trips": 58
    },
    {
      "name": "Boylston St at Massachusetts Ave",
      "lat": 42.3474,
      "lng": -71.0868,
      "trips": 48
    },
    {
      "name": "Boynton Yards at 101 South Street",
      "lat": 42.3755,
      "lng": -71.0912,
      "trips": 11
    },
    {
      "name": "Bremen St at Marion St",
      "lat": 42.3741,
      "lng": -71.0328,
      "trips": 2
    },
    {
      "name": "Brigham Circle - Francis St at Huntington Ave",
      "lat": 42.3345,
      "lng": -71.1046,
      "trips": 31
    },
    {
      "name": "Brighton Center - Washington St at Cambridge St",
      "lat": 42.3489,
      "lng": -71.1503,
      "trips": 15
    },
    {
      "name": "Brighton Mills - 370 Western Ave",
      "lat": 42.3615,
      "lng": -71.1378,
      "trips": 19
    },
    {
      "name": "Broad Canal Way at Third Street",
      "lat": 42.363,
      "lng": -71.0829,
      "trips": 23
    },
    {
      "name": "Broadway St at Mt Pleasant St",
      "lat": 42.3861,
      "lng": -71.0783,
      "trips": 12
    },
    {
      "name": "Broadway T Stop",
      "lat": 42.343,
      "lng": -71.058,
      "trips": 27
    },
    {
      "name": "Broadway at Beacham St",
      "lat": 42.3984,
      "lng": -71.0637,
      "trips": 6
    },
    {
      "name": "Broadway at Central St",
      "lat": 42.3952,
      "lng": -71.0985,
      "trips": 19
    },
    {
      "name": "Broadway at Kittie Knox Bike Path",
      "lat": 42.3641,
      "lng": -71.0874,
      "trips": 33
    },
    {
      "name": "Broadway at Lynde St",
      "lat": 42.3965,
      "lng": -71.0655,
      "trips": 6
    },
    {
      "name": "Broadway at Maple St",
      "lat": 42.4103,
      "lng": -71.0526,
      "trips": 7
    },
    {
      "name": "Brookline Town Hall",
      "lat": 42.3338,
      "lng": -71.1205,
      "trips": 15
    },
    {
      "name": "Brookline Village - Station Street at MBTA",
      "lat": 42.3327,
      "lng": -71.1163,
      "trips": 22
    },
    {
      "name": "Bunker Hill Community College",
      "lat": 42.3741,
      "lng": -71.0691,
      "trips": 18
    },
    {
      "name": "Burlington Ave at Brookline Ave",
      "lat": 42.3457,
      "lng": -71.101,
      "trips": 12
    },
    {
      "name": "Butler T Stop",
      "lat": 42.2725,
      "lng": -71.0629,
      "trips": 1
    },
    {
      "name": "Cambridge Crossing at North First Street",
      "lat": 42.3711,
      "lng": -71.0762,
      "trips": 39
    },
    {
      "name": "Cambridge Dept. of Public Works -147 Hampshire St.",
      "lat": 42.3712,
      "lng": -71.0976,
      "trips": 41
    },
    {
      "name": "Cambridge Main Library at Broadway / Trowbridge St",
      "lat": 42.3735,
      "lng": -71.1112,
      "trips": 60
    },
    {
      "name": "Cambridge St - at Columbia St / Webster Ave",
      "lat": 42.3731,
      "lng": -71.0944,
      "trips": 53
    },
    {
      "name": "Cambridge St at Joy St",
      "lat": 42.3612,
      "lng": -71.0653,
      "trips": 65
    },
    {
      "name": "Cambridgeside Pl at Land Blvd",
      "lat": 42.3669,
      "lng": -71.0765,
      "trips": 26
    },
    {
      "name": "Carr Park",
      "lat": 42.4344,
      "lng": -71.0948,
      "trips": 4
    },
    {
      "name": "Central Sq Post Office / Cambridge City Hall @ Mass Ave / Pleasant St",
      "lat": 42.3664,
      "lng": -71.1055,
      "trips": 61
    },
    {
      "name": "Central Square East Boston",
      "lat": 42.3754,
      "lng": -71.0392,
      "trips": 10
    },
    {
      "name": "Central Square @ Mass Ave / Essex St",
      "lat": 42.3651,
      "lng": -71.1031,
      "trips": 170
    },
    {
      "name": "Centre St at Allandale St",
      "lat": 42.3008,
      "lng": -71.1274,
      "trips": 1
    },
    {
      "name": "Centre St at Parkway YMCA",
      "lat": 42.2828,
      "lng": -71.1573,
      "trips": 1
    },
    {
      "name": "Centre St at W. Roxbury Post Office",
      "lat": 42.2863,
      "lng": -71.1534,
      "trips": 3
    },
    {
      "name": "Charles Circle - Charles St at Cambridge St",
      "lat": 42.3608,
      "lng": -71.0712,
      "trips": 106
    },
    {
      "name": "Charles St S at Stuart",
      "lat": 42.3508,
      "lng": -71.0667,
      "trips": 5
    },
    {
      "name": "Charles St S at Stuart St",
      "lat": 42.3508,
      "lng": -71.0667,
      "trips": 3
    },
    {
      "name": "Charlestown Navy Yard",
      "lat": 42.3741,
      "lng": -71.0548,
      "trips": 54
    },
    {
      "name": "Chelsea St at Vine St",
      "lat": 42.4034,
      "lng": -71.0473,
      "trips": 1
    },
    {
      "name": "Chelsea Station",
      "lat": 42.3964,
      "lng": -71.0399,
      "trips": 8
    },
    {
      "name": "Chestnut Hill Ave at Ledgemere Rd",
      "lat": 42.3437,
      "lng": -71.1533,
      "trips": 5
    },
    {
      "name": "Chestnut St at Poplar St",
      "lat": 42.3776,
      "lng": -71.086,
      "trips": 4
    },
    {
      "name": "Child Street at Brian P. Murphy Staircase",
      "lat": 42.372,
      "lng": -71.072,
      "trips": 31
    },
    {
      "name": "Chinatown Gate Plaza",
      "lat": 42.3514,
      "lng": -71.0594,
      "trips": 35
    },
    {
      "name": "Chinatown T Stop",
      "lat": 42.3524,
      "lng": -71.0627,
      "trips": 58
    },
    {
      "name": "Christian Science Plaza - Massachusetts Ave at Westland Ave",
      "lat": 42.3437,
      "lng": -71.0858,
      "trips": 83
    },
    {
      "name": "Church St",
      "lat": 42.3743,
      "lng": -71.1197,
      "trips": 23
    },
    {
      "name": "Circuit Drive at American Legion Hwy",
      "lat": 42.297,
      "lng": -71.0917,
      "trips": 1
    },
    {
      "name": "Clarendon Hill at Broadway",
      "lat": 42.4063,
      "lng": -71.1324,
      "trips": 10
    },
    {
      "name": "Cleary Sq",
      "lat": 42.2556,
      "lng": -71.1244,
      "trips": 2
    },
    {
      "name": "Cleveland Circle",
      "lat": 42.3355,
      "lng": -71.1506,
      "trips": 7
    },
    {
      "name": "Clinton St at North St",
      "lat": 42.3606,
      "lng": -71.0555,
      "trips": 11
    },
    {
      "name": "Codman Square Library",
      "lat": 42.2874,
      "lng": -71.0711,
      "trips": 1
    },
    {
      "name": "Colleges of the Fenway - Fenway at Avenue Louis Pasteur",
      "lat": 42.3401,
      "lng": -71.1006,
      "trips": 21
    },
    {
      "name": "Columbia Rd at Ceylon St",
      "lat": 42.3096,
      "lng": -71.0729,
      "trips": 2
    },
    {
      "name": "Columbia Rd at Tierney Community Center",
      "lat": 42.3302,
      "lng": -71.0506,
      "trips": 3
    },
    {
      "name": "Columbus Ave at W. Canton St",
      "lat": 42.3447,
      "lng": -71.0765,
      "trips": 27
    },
    {
      "name": "Commercial St at Charter St",
      "lat": 42.3682,
      "lng": -71.0568,
      "trips": 23
    },
    {
      "name": "Commonwealth Ave At Babcock St",
      "lat": 42.3515,
      "lng": -71.1213,
      "trips": 16
    },
    {
      "name": "Commonwealth Ave at Agganis Way",
      "lat": 42.3517,
      "lng": -71.119,
      "trips": 76
    },
    {
      "name": "Commonwealth Ave at Chiswick Rd",
      "lat": 42.3402,
      "lng": -71.1517,
      "trips": 12
    },
    {
      "name": "Commonwealth Ave at Fidelis Way",
      "lat": 42.3459,
      "lng": -71.1419,
      "trips": 5
    },
    {
      "name": "Commonwealth Ave at Griggs St",
      "lat": 42.3492,
      "lng": -71.1328,
      "trips": 30
    },
    {
      "name": "Commonwealth Ave at Kelton St",
      "lat": 42.3484,
      "lng": -71.14,
      "trips": 27
    },
    {
      "name": "Commonwealth Ave at Naples Rd",
      "lat": 42.3519,
      "lng": -71.1238,
      "trips": 10
    },
    {
      "name": "Community Path at Cedar Street",
      "lat": 42.3941,
      "lng": -71.1113,
      "trips": 22
    },
    {
      "name": "Community Path at Lowell St",
      "lat": 42.3925,
      "lng": -71.1056,
      "trips": 13
    },
    {
      "name": "Concord Ave at Spinelli Place",
      "lat": 42.3907,
      "lng": -71.1539,
      "trips": 2
    },
    {
      "name": "Congress St at Boston City Hall",
      "lat": 42.3604,
      "lng": -71.0575,
      "trips": 19
    },
    {
      "name": "Congress St at Northern Ave",
      "lat": 42.3481,
      "lng": -71.0376,
      "trips": 16
    },
    {
      "name": "Conway Park - Somerville Avenue",
      "lat": 42.3836,
      "lng": -71.1085,
      "trips": 17
    },
    {
      "name": "Coolidge Corner - Beacon St at Centre St",
      "lat": 42.3416,
      "lng": -71.1233,
      "trips": 42
    },
    {
      "name": "Coolidge Sq.",
      "lat": 42.3721,
      "lng": -71.1568,
      "trips": 2
    },
    {
      "name": "Copley Square - Dartmouth St at Boylston St",
      "lat": 42.3499,
      "lng": -71.0774,
      "trips": 52
    },
    {
      "name": "Craigie & Summer at Conway Park (Temp. Winter Location)",
      "lat": 42.3834,
      "lng": -71.1075,
      "trips": 27
    },
    {
      "name": "Cross St at Hanover St",
      "lat": 42.3628,
      "lng": -71.0561,
      "trips": 61
    },
    {
      "name": "Curtis Hall - South St at Centre St",
      "lat": 42.3091,
      "lng": -71.1154,
      "trips": 7
    },
    {
      "name": "Cypress St at Clark Playground",
      "lat": 42.3278,
      "lng": -71.1254,
      "trips": 7
    },
    {
      "name": "Damrell St at Old Colony",
      "lat": 42.3324,
      "lng": -71.0545,
      "trips": 12
    },
    {
      "name": "Dana Park",
      "lat": 42.3618,
      "lng": -71.1081,
      "trips": 42
    },
    {
      "name": "Danehy Park",
      "lat": 42.389,
      "lng": -71.1328,
      "trips": 10
    },
    {
      "name": "Danehy Park at New Street",
      "lat": 42.3895,
      "lng": -71.139,
      "trips": 5
    },
    {
      "name": "Dartmouth St at Newbury St",
      "lat": 42.351,
      "lng": -71.0778,
      "trips": 34
    },
    {
      "name": "Davis Sq",
      "lat": 42.397,
      "lng": -71.123,
      "trips": 52
    },
    {
      "name": "Day Sq",
      "lat": 42.3793,
      "lng": -71.0277,
      "trips": 2
    },
    {
      "name": "Deerfield St at Commonwealth Ave",
      "lat": 42.3492,
      "lng": -71.0973,
      "trips": 55
    },
    {
      "name": "Derby Street",
      "lat": 42.5201,
      "lng": -70.8914,
      "trips": 1
    },
    {
      "name": "Discovery Park - 30 Acorn Park Drive",
      "lat": 42.3979,
      "lng": -71.148,
      "trips": 16
    },
    {
      "name": "Dorchester Ave at Gillette Park",
      "lat": 42.344,
      "lng": -71.0574,
      "trips": 9
    },
    {
      "name": "Dorchester Ave at King St",
      "lat": 42.2917,
      "lng": -71.0626,
      "trips": 2
    },
    {
      "name": "Dudley Square - Bolling Building",
      "lat": 42.3298,
      "lng": -71.0839,
      "trips": 13
    },
    {
      "name": "Dudley Town Common - Mt Pleasant Ave at Blue Hill Ave",
      "lat": 42.3253,
      "lng": -71.0754,
      "trips": 8
    },
    {
      "name": "E Cottage St at Columbia Rd",
      "lat": 42.3206,
      "lng": -71.062,
      "trips": 15
    },
    {
      "name": "EF - North Point Park",
      "lat": 42.3699,
      "lng": -71.07,
      "trips": 30
    },
    {
      "name": "East Boston Neighborhood Health Center - 20 Maverick Square",
      "lat": 42.3695,
      "lng": -71.0394,
      "trips": 12
    },
    {
      "name": "East Somerville Library (Broadway and Illinois)",
      "lat": 42.3876,
      "lng": -71.0832,
      "trips": 9
    },
    {
      "name": "Edgerly Education Center",
      "lat": 42.3872,
      "lng": -71.0871,
      "trips": 23
    },
    {
      "name": "Edwards Playground - Main St at Eden St",
      "lat": 42.379,
      "lng": -71.0686,
      "trips": 21
    },
    {
      "name": "Egleston Square - Atherton St at Washington St",
      "lat": 42.3157,
      "lng": -71.0987,
      "trips": 7
    },
    {
      "name": "Elevate at One Leighton",
      "lat": 42.3699,
      "lng": -71.0735,
      "trips": 31
    },
    {
      "name": "Elm St at White St",
      "lat": 42.3895,
      "lng": -71.1169,
      "trips": 23
    },
    {
      "name": "Encore",
      "lat": 42.3934,
      "lng": -71.0728,
      "trips": 2
    },
    {
      "name": "Essex St at Dalton Parkway",
      "lat": 42.5162,
      "lng": -70.9055,
      "trips": 2
    },
    {
      "name": "Everett Square (Broadway at Norwood St)",
      "lat": 42.4074,
      "lng": -71.0554,
      "trips": 2
    },
    {
      "name": "Fan Pier",
      "lat": 42.3534,
      "lng": -71.0446,
      "trips": 15
    },
    {
      "name": "Fields Corner T Stop",
      "lat": 42.2996,
      "lng": -71.0607,
      "trips": 4
    },
    {
      "name": "Flat 9 at Whittier",
      "lat": 42.3342,
      "lng": -71.0877,
      "trips": 9
    },
    {
      "name": "Foley St at Grand Union Blvd",
      "lat": 42.393,
      "lng": -71.0807,
      "trips": 12
    },
    {
      "name": "Forest Hills",
      "lat": 42.3008,
      "lng": -71.1144,
      "trips": 7
    },
    {
      "name": "Forsyth St at Huntington Ave",
      "lat": 42.3392,
      "lng": -71.0905,
      "trips": 87
    },
    {
      "name": "Foss Park",
      "lat": 42.3911,
      "lng": -71.0904,
      "trips": 21
    },
    {
      "name": "Four Corners - 157 Washington St",
      "lat": 42.3041,
      "lng": -71.0793,
      "trips": 4
    },
    {
      "name": "Four Corners/Geneva T Stop",
      "lat": 42.3032,
      "lng": -71.0782,
      "trips": 1
    },
    {
      "name": "Franklin Park - Seaver St at Humboldt Ave",
      "lat": 42.31,
      "lng": -71.0925,
      "trips": 3
    },
    {
      "name": "Franklin Park Zoo - Franklin Park Rd at Blue Hill Ave",
      "lat": 42.3035,
      "lng": -71.0853,
      "trips": 1
    },
    {
      "name": "Fresh Pond Reservation",
      "lat": 42.3827,
      "lng": -71.1435,
      "trips": 6
    },
    {
      "name": "Galen St at Watertown St",
      "lat": 42.3643,
      "lng": -71.1857,
      "trips": 2
    },
    {
      "name": "Galileo Galilei Way at Fulkerson St/Binney St",
      "lat": 42.3664,
      "lng": -71.0885,
      "trips": 20
    },
    {
      "name": "Galileo Galilei Way @ Mainreet",
      "lat": 42.363,
      "lng": -71.0897,
      "trips": 42
    },
    {
      "name": "Geiger Gibson Community Health Center",
      "lat": 42.3189,
      "lng": -71.0454,
      "trips": 8
    },
    {
      "name": "Gilman Square T at Medford St",
      "lat": 42.3867,
      "lng": -71.0946,
      "trips": 16
    },
    {
      "name": "Gore Street at Lambert Street",
      "lat": 42.3731,
      "lng": -71.0863,
      "trips": 58
    },
    {
      "name": "Gove St at Orleans St",
      "lat": 42.3706,
      "lng": -71.0356,
      "trips": 12
    },
    {
      "name": "Government Center  at Court St",
      "lat": 42.3598,
      "lng": -71.0598,
      "trips": 47
    },
    {
      "name": "Governors Ave at Lawrence Rd",
      "lat": 42.4252,
      "lng": -71.1104,
      "trips": 1
    },
    {
      "name": "Graham and Parks School \u2013 Linnaean St at Walker St",
      "lat": 42.3829,
      "lng": -71.1245,
      "trips": 22
    },
    {
      "name": "Gramsdorf Playground",
      "lat": 42.4082,
      "lng": -71.0429,
      "trips": 3
    },
    {
      "name": "Grand Union Blvd at Revolution Dr",
      "lat": 42.3917,
      "lng": -71.0804,
      "trips": 9
    },
    {
      "name": "Green Street T Stop - Green St at Amory St",
      "lat": 42.3106,
      "lng": -71.1073,
      "trips": 15
    },
    {
      "name": "Grove Hall Library - 41 Geneva Ave",
      "lat": 42.3079,
      "lng": -71.081,
      "trips": 5
    },
    {
      "name": "Grove St at Community Path",
      "lat": 42.3964,
      "lng": -71.1201,
      "trips": 26
    },
    {
      "name": "HMS/HSPH - Avenue Louis Pasteur at Longwood Ave",
      "lat": 42.3374,
      "lng": -71.1029,
      "trips": 48
    },
    {
      "name": "Hale Park",
      "lat": 42.4153,
      "lng": -71.0528,
      "trips": 1
    },
    {
      "name": "Hancock St at Pleasant St",
      "lat": 42.3098,
      "lng": -71.0602,
      "trips": 5
    },
    {
      "name": "Harbor St at Channel St",
      "lat": 42.3451,
      "lng": -71.0365,
      "trips": 5
    },
    {
      "name": "Harrison Ave at Bennet St",
      "lat": 42.3494,
      "lng": -71.0621,
      "trips": 36
    },
    {
      "name": "Harrison Ave at E. Dedham St",
      "lat": 42.3392,
      "lng": -71.0698,
      "trips": 41
    },
    {
      "name": "Harrison Ave at Mullins Way",
      "lat": 42.3452,
      "lng": -71.0638,
      "trips": 42
    },
    {
      "name": "Harvard Ave at Brainerd Rd",
      "lat": 42.3495,
      "lng": -71.1303,
      "trips": 28
    },
    {
      "name": "Harvard Kennedy School at Bennett St / Eliot St",
      "lat": 42.3722,
      "lng": -71.1219,
      "trips": 30
    },
    {
      "name": "Harvard Law School @ Mass Ave / Jarvis St",
      "lat": 42.379,
      "lng": -71.1199,
      "trips": 34
    },
    {
      "name": "Harvard Square at Brattle St / Eliot St",
      "lat": 42.3733,
      "lng": -71.121,
      "trips": 42
    },
    {
      "name": "Harvard Square @ Mass Ave/ Dunster",
      "lat": 42.3733,
      "lng": -71.1186,
      "trips": 93
    },
    {
      "name": "Harvard St and Stedman St",
      "lat": 42.3444,
      "lng": -71.1249,
      "trips": 21
    },
    {
      "name": "Harvard St at Greene-Rose Heritage Park",
      "lat": 42.366,
      "lng": -71.0952,
      "trips": 40
    },
    {
      "name": "Harvard Stadium: N. Harvard St at Soldiers Field Rd",
      "lat": 42.368,
      "lng": -71.1242,
      "trips": 20
    },
    {
      "name": "Harvard University / SEAS Cruft-Pierce Halls at 29 Oxford St",
      "lat": 42.3779,
      "lng": -71.1169,
      "trips": 38
    },
    {
      "name": "Harvard University Gund Hall at Quincy St / Kirkland St",
      "lat": 42.3764,
      "lng": -71.114,
      "trips": 28
    },
    {
      "name": "Harvard University Housing - 115 Putnam Ave at Peabody Terrace",
      "lat": 42.3666,
      "lng": -71.1142,
      "trips": 21
    },
    {
      "name": "Harvard University Radcliffe Quadrangle at Shepard St / Garden St",
      "lat": 42.3803,
      "lng": -71.1251,
      "trips": 21
    },
    {
      "name": "Harvard University River Houses at DeWolfe St / Cowperthwaite St",
      "lat": 42.3692,
      "lng": -71.1169,
      "trips": 37
    },
    {
      "name": "Herter Park",
      "lat": 42.3657,
      "lng": -71.1354,
      "trips": 2
    },
    {
      "name": "Hickey Park",
      "lat": 42.425,
      "lng": -71.099,
      "trips": 3
    },
    {
      "name": "High St at Cypress St",
      "lat": 42.3246,
      "lng": -71.1214,
      "trips": 9
    },
    {
      "name": "High St at Federal St",
      "lat": 42.3534,
      "lng": -71.0565,
      "trips": 34
    },
    {
      "name": "Honan Library",
      "lat": 42.3603,
      "lng": -71.1285,
      "trips": 19
    },
    {
      "name": "Hood Park",
      "lat": 42.38,
      "lng": -71.073,
      "trips": 9
    },
    {
      "name": "Hormel Stadium",
      "lat": 42.4071,
      "lng": -71.0963,
      "trips": 5
    },
    {
      "name": "Huntington Ave at Mass Art",
      "lat": 42.3366,
      "lng": -71.0989,
      "trips": 21
    },
    {
      "name": "Huron Ave At Vassal Lane",
      "lat": 42.3817,
      "lng": -71.1343,
      "trips": 11
    },
    {
      "name": "Hyde Park Ave at Walk Hill St",
      "lat": 42.2961,
      "lng": -71.116,
      "trips": 1
    },
    {
      "name": "Hyde Park Library",
      "lat": 42.2568,
      "lng": -71.1225,
      "trips": 1
    },
    {
      "name": "Hyde Square - Centre St at Perkins St",
      "lat": 42.3218,
      "lng": -71.1098,
      "trips": 34
    },
    {
      "name": "ID Building East",
      "lat": 42.3448,
      "lng": -71.0287,
      "trips": 14
    },
    {
      "name": "ID Building West",
      "lat": 42.3448,
      "lng": -71.0316,
      "trips": 21
    },
    {
      "name": "Ink Block - Harrison Ave at Herald St",
      "lat": 42.3459,
      "lng": -71.0632,
      "trips": 27
    },
    {
      "name": "Inman Square at Springfield St.",
      "lat": 42.3743,
      "lng": -71.1003,
      "trips": 67
    },
    {
      "name": "Innovation Lab - 125 Western Ave at Batten Way",
      "lat": 42.3637,
      "lng": -71.1246,
      "trips": 21
    },
    {
      "name": "JFK Crossing at Harvard St. / Thorndike St.",
      "lat": 42.3466,
      "lng": -71.1284,
      "trips": 13
    },
    {
      "name": "JFK/UMass T Stop",
      "lat": 42.3203,
      "lng": -71.0512,
      "trips": 9
    },
    {
      "name": "Jackson Square T Stop",
      "lat": 42.3229,
      "lng": -71.1001,
      "trips": 27
    },
    {
      "name": "Jamaica St at South St",
      "lat": 42.306,
      "lng": -71.1157,
      "trips": 2
    },
    {
      "name": "John Ahern Field at Kennedy-Longfellow School",
      "lat": 42.369,
      "lng": -71.0863,
      "trips": 12
    },
    {
      "name": "Kearins Playground",
      "lat": 42.4062,
      "lng": -71.0604,
      "trips": 2
    },
    {
      "name": "Kendall Street",
      "lat": 42.3631,
      "lng": -71.0823,
      "trips": 11
    },
    {
      "name": "Kendall T",
      "lat": 42.3624,
      "lng": -71.085,
      "trips": 77
    },
    {
      "name": "Kenmore Square",
      "lat": 42.3487,
      "lng": -71.097,
      "trips": 35
    },
    {
      "name": "Kennedy-Longfellow School 158 Spring St",
      "lat": 42.3696,
      "lng": -71.0858,
      "trips": 63
    },
    {
      "name": "Lafayette Square @ Mass Ave / Main St / Columbia St",
      "lat": 42.3634,
      "lng": -71.1005,
      "trips": 29
    },
    {
      "name": "Lafayette at Leach St",
      "lat": 42.5114,
      "lng": -70.8918,
      "trips": 1
    },
    {
      "name": "Lake St. at Minuteman Bikeway",
      "lat": 42.4042,
      "lng": -71.1469,
      "trips": 7
    },
    {
      "name": "Landmark Center - Brookline Ave at Park Dr",
      "lat": 42.3437,
      "lng": -71.1024,
      "trips": 67
    },
    {
      "name": "Lansdowne T Stop",
      "lat": 42.3473,
      "lng": -71.1002,
      "trips": 48
    },
    {
      "name": "Lechmere Canal Park",
      "lat": 42.3699,
      "lng": -71.0761,
      "trips": 11
    },
    {
      "name": "Lenox St at Kendall St",
      "lat": 42.3375,
      "lng": -71.0824,
      "trips": 15
    },
    {
      "name": "Lesley University",
      "lat": 42.3867,
      "lng": -71.119,
      "trips": 19
    },
    {
      "name": "Lewis Mall Wharf",
      "lat": 42.3657,
      "lng": -71.0403,
      "trips": 5
    },
    {
      "name": "Lewis Wharf at Atlantic Ave",
      "lat": 42.3639,
      "lng": -71.0509,
      "trips": 43
    },
    {
      "name": "Lincoln St at Empire St",
      "lat": 42.3577,
      "lng": -71.1285,
      "trips": 25
    },
    {
      "name": "Linear Park",
      "lat": 42.3978,
      "lng": -71.1305,
      "trips": 33
    },
    {
      "name": "Linwood St at Minuteman Bikeway",
      "lat": 42.4094,
      "lng": -71.1491,
      "trips": 9
    },
    {
      "name": "Logan Park",
      "lat": 42.418,
      "lng": -71.0966,
      "trips": 5
    },
    {
      "name": "Longwood Ave at Binney St",
      "lat": 42.3386,
      "lng": -71.1065,
      "trips": 46
    },
    {
      "name": "Lower Cambridgeport at Magazine St / Riverside Rd",
      "lat": 42.3573,
      "lng": -71.114,
      "trips": 80
    },
    {
      "name": "MIT Carleton St @ Amherst",
      "lat": 42.3605,
      "lng": -71.0867,
      "trips": 59
    },
    {
      "name": "MIT Hayward St @ Amherst",
      "lat": 42.3609,
      "lng": -71.0855,
      "trips": 48
    },
    {
      "name": "MIT Pacific",
      "lat": 42.3596,
      "lng": -71.1013,
      "trips": 114
    },
    {
      "name": "MIT Stata Center @ Vassar / Main St",
      "lat": 42.3621,
      "lng": -71.0912,
      "trips": 113
    },
    {
      "name": "Vassar St",
      "lat": 42.3556,
      "lng": -71.1039,
      "trips": 131
    },
    {
      "name": "MIT @ Mass Ave / Amherst St",
      "lat": 42.3581,
      "lng": -71.0932,
      "trips": 214
    },
    {
      "name": "MLK Blvd at Washington St",
      "lat": 42.3214,
      "lng": -71.0913,
      "trips": 13
    },
    {
      "name": "Magoun Square at Trum Field",
      "lat": 42.3978,
      "lng": -71.106,
      "trips": 10
    },
    {
      "name": "Main St at Austin St",
      "lat": 42.3756,
      "lng": -71.0647,
      "trips": 30
    },
    {
      "name": "Main St at Baldwin St",
      "lat": 42.3808,
      "lng": -71.0706,
      "trips": 10
    },
    {
      "name": "Main St at Brooks Park",
      "lat": 42.4117,
      "lng": -71.1104,
      "trips": 3
    },
    {
      "name": "Main St at Thompson Sq",
      "lat": 42.3749,
      "lng": -71.0638,
      "trips": 17
    },
    {
      "name": "Main Street/Albany Street/Technology Square",
      "lat": 42.3629,
      "lng": -71.0916,
      "trips": 62
    },
    {
      "name": "Malden Center T Station",
      "lat": 42.4265,
      "lng": -71.0732,
      "trips": 10
    },
    {
      "name": "Malden High School",
      "lat": 42.4265,
      "lng": -71.0639,
      "trips": 7
    },
    {
      "name": "Marion St at Harvard St",
      "lat": 42.3401,
      "lng": -71.1207,
      "trips": 24
    },
    {
      "name": "Marion St at White St",
      "lat": 42.3807,
      "lng": -71.0391,
      "trips": 10
    },
    {
      "name": "Martha Eliot Health Center",
      "lat": 42.3242,
      "lng": -71.102,
      "trips": 4
    },
    {
      "name": "Mass Ave T Station",
      "lat": 42.3414,
      "lng": -71.0834,
      "trips": 34
    },
    {
      "name": "Mass Ave at Albany St",
      "lat": 42.3614,
      "lng": -71.0967,
      "trips": 88
    },
    {
      "name": "Mass Ave at Grafton St",
      "lat": 42.4073,
      "lng": -71.1438,
      "trips": 11
    },
    {
      "name": "Mass Ave at Hadley/Walden",
      "lat": 42.3912,
      "lng": -71.1226,
      "trips": 15
    },
    {
      "name": "Mass Ave/Lafayette Square",
      "lat": 42.3636,
      "lng": -71.1004,
      "trips": 79
    },
    {
      "name": "Massachusetts Ave at Boylston St.",
      "lat": 42.3475,
      "lng": -71.088,
      "trips": 126
    },
    {
      "name": "Massachusetts Ave at Columbus Ave",
      "lat": 42.3408,
      "lng": -71.0816,
      "trips": 33
    },
    {
      "name": "Mattapan T Stop",
      "lat": 42.268,
      "lng": -71.0937,
      "trips": 2
    },
    {
      "name": "Maverick Square - Lewis Mall",
      "lat": 42.3688,
      "lng": -71.0399,
      "trips": 11
    },
    {
      "name": "Maverick St at Massport Path",
      "lat": 42.3677,
      "lng": -71.0334,
      "trips": 3
    },
    {
      "name": "Mayor Salvo Path at Mill St",
      "lat": 42.518,
      "lng": -70.8957,
      "trips": 1
    },
    {
      "name": "Meaney Playground - Pleasant St at E Cottage St",
      "lat": 42.3187,
      "lng": -71.0589,
      "trips": 14
    },
    {
      "name": "Medford Sq - Riverside Ave at River St",
      "lat": 42.4177,
      "lng": -71.1081,
      "trips": 3
    },
    {
      "name": "Medford St at Charlestown BCYF",
      "lat": 42.3804,
      "lng": -71.0606,
      "trips": 10
    },
    {
      "name": "Medford St at Warren St",
      "lat": 42.4165,
      "lng": -71.1481,
      "trips": 2
    },
    {
      "name": "Melnea Cass Blvd at Hampden St",
      "lat": 42.331,
      "lng": -71.0755,
      "trips": 8
    },
    {
      "name": "Mill St. at Minuteman Bikeway",
      "lat": 42.4186,
      "lng": -71.1575,
      "trips": 2
    },
    {
      "name": "Moore Youth Center",
      "lat": 42.3635,
      "lng": -71.1117,
      "trips": 25
    },
    {
      "name": "Morgan Ave at North First St",
      "lat": 42.372,
      "lng": -71.0759,
      "trips": 30
    },
    {
      "name": "Morton St at Gallivan Blvd",
      "lat": 42.2787,
      "lng": -71.0803,
      "trips": 2
    },
    {
      "name": "Mt Auburn",
      "lat": 42.3748,
      "lng": -71.1332,
      "trips": 11
    },
    {
      "name": "Mugar Way at Beacon St",
      "lat": 42.3555,
      "lng": -71.0729,
      "trips": 33
    },
    {
      "name": "Murphy Skating Rink - 1880 Day Blvd",
      "lat": 42.3364,
      "lng": -71.0237,
      "trips": 3
    },
    {
      "name": "Museum of Science",
      "lat": 42.3677,
      "lng": -71.0712,
      "trips": 11
    },
    {
      "name": "NCAAA - Walnut Ave at Crawford St",
      "lat": 42.3169,
      "lng": -71.0919,
      "trips": 8
    },
    {
      "name": "Nashua Street at Red Auerbach Way",
      "lat": 42.3657,
      "lng": -71.0643,
      "trips": 70
    },
    {
      "name": "New Balance - 20 Guest St",
      "lat": 42.3573,
      "lng": -71.1467,
      "trips": 12
    },
    {
      "name": "Newmarket Square T Stop - Massachusetts Ave at Newmarket Square",
      "lat": 42.3266,
      "lng": -71.0665,
      "trips": 19
    },
    {
      "name": "Nichols Ave. at Watertown Greenway",
      "lat": 42.3677,
      "lng": -71.1562,
      "trips": 5
    },
    {
      "name": "Northbourne Rd at Hyde Park Ave",
      "lat": 42.2912,
      "lng": -71.1177,
      "trips": 2
    },
    {
      "name": "Northern Strand - West St & Wellington Ave",
      "lat": 42.4034,
      "lng": -71.0633,
      "trips": 4
    },
    {
      "name": "Northern Strand @ Main",
      "lat": 42.4239,
      "lng": -71.0678,
      "trips": 3
    },
    {
      "name": "O'Brien Highway at First Street",
      "lat": 42.371,
      "lng": -71.0766,
      "trips": 23
    },
    {
      "name": "Oak Square - 615 Washington St",
      "lat": 42.3506,
      "lng": -71.1665,
      "trips": 10
    },
    {
      "name": "Old Morse Park at Putnam Ave",
      "lat": 42.3577,
      "lng": -71.1084,
      "trips": 55
    },
    {
      "name": "One Beacon St",
      "lat": 42.3585,
      "lng": -71.0614,
      "trips": 24
    },
    {
      "name": "One Brigham Circle",
      "lat": 42.3339,
      "lng": -71.1044,
      "trips": 29
    },
    {
      "name": "One Broadway / Kendall Sq @ Main / 3rd St",
      "lat": 42.3622,
      "lng": -71.0831,
      "trips": 47
    },
    {
      "name": "One Kendall Square at Hampshire St / Portland St",
      "lat": 42.366,
      "lng": -71.0913,
      "trips": 58
    },
    {
      "name": "One Memorial Drive",
      "lat": 42.3616,
      "lng": -71.0804,
      "trips": 13
    },
    {
      "name": "Orient Heights T Stop - Bennington St at Saratoga St",
      "lat": 42.3868,
      "lng": -71.0061,
      "trips": 3
    },
    {
      "name": "Orr Sq (Shirley Ave)",
      "lat": 42.4072,
      "lng": -70.9927,
      "trips": 1
    },
    {
      "name": "Packard Ave at Powderhouse Blvd",
      "lat": 42.4045,
      "lng": -71.1234,
      "trips": 7
    },
    {
      "name": "Packard's Corner - Commonwealth Ave at Brighton Ave",
      "lat": 42.3523,
      "lng": -71.1238,
      "trips": 48
    },
    {
      "name": "Park Dr at Buswell St",
      "lat": 42.3472,
      "lng": -71.1053,
      "trips": 29
    },
    {
      "name": "Park Plaza at Charles St S.",
      "lat": 42.3518,
      "lng": -71.0678,
      "trips": 23
    },
    {
      "name": "Park St at Norwell St",
      "lat": 42.2944,
      "lng": -71.0782,
      "trips": 1
    },
    {
      "name": "Parker St at Huntington Ave",
      "lat": 42.3385,
      "lng": -71.0926,
      "trips": 30
    },
    {
      "name": "Pearl St at Milk St",
      "lat": 42.3568,
      "lng": -71.0555,
      "trips": 6
    },
    {
      "name": "Perry Park",
      "lat": 42.3793,
      "lng": -71.1034,
      "trips": 26
    },
    {
      "name": "Pier 4 Blvd at Autumn Ln",
      "lat": 42.3502,
      "lng": -71.0447,
      "trips": 45
    },
    {
      "name": "Pope John Paul II Park - Neponset Trail at Hallet St",
      "lat": 42.2798,
      "lng": -71.0461,
      "trips": 1
    },
    {
      "name": "Porter Square Station",
      "lat": 42.388,
      "lng": -71.1191,
      "trips": 57
    },
    {
      "name": "Porzio Park",
      "lat": 42.3641,
      "lng": -71.0288,
      "trips": 4
    },
    {
      "name": "Powder House Circle - Nathan Tufts Park",
      "lat": 42.4009,
      "lng": -71.1168,
      "trips": 9
    },
    {
      "name": "Prudential Center - 101 Huntington Ave",
      "lat": 42.3466,
      "lng": -71.0807,
      "trips": 49
    },
    {
      "name": "Purchase St at Pearl St",
      "lat": 42.3547,
      "lng": -71.0532,
      "trips": 30
    },
    {
      "name": "Railroad Lot and Minuteman Bikeway",
      "lat": 42.4161,
      "lng": -71.1534,
      "trips": 3
    },
    {
      "name": "Raymond Park at Walden St",
      "lat": 42.3874,
      "lng": -71.1276,
      "trips": 11
    },
    {
      "name": "Revere City Hall",
      "lat": 42.4074,
      "lng": -71.0139,
      "trips": 1
    },
    {
      "name": "Rindge Avenue - O'Neill Library",
      "lat": 42.3928,
      "lng": -71.129,
      "trips": 11
    },
    {
      "name": "Riverway at Brookline Ave",
      "lat": 42.3366,
      "lng": -71.11,
      "trips": 31
    },
    {
      "name": "Rogers St & Land Blvd",
      "lat": 42.3665,
      "lng": -71.0765,
      "trips": 7
    },
    {
      "name": "Roslindale Village - South St",
      "lat": 42.2871,
      "lng": -71.1278,
      "trips": 3
    },
    {
      "name": "Roslindale Village - Washington St",
      "lat": 42.2862,
      "lng": -71.1283,
      "trips": 2
    },
    {
      "name": "Rowes Wharf at Atlantic Ave",
      "lat": 42.3572,
      "lng": -71.0507,
      "trips": 34
    },
    {
      "name": "Roxbury Crossing T Stop - Columbus Ave at Tremont St",
      "lat": 42.3312,
      "lng": -71.0952,
      "trips": 41
    },
    {
      "name": "Roxbury YMCA - Warren St at MLK Blvd",
      "lat": 42.3179,
      "lng": -71.0824,
      "trips": 4
    },
    {
      "name": "Ruggles T Stop - Columbus Ave at Melnea Cass Blvd",
      "lat": 42.3362,
      "lng": -71.088,
      "trips": 64
    },
    {
      "name": "S Huntington Ave at Heath St",
      "lat": 42.3276,
      "lng": -71.1109,
      "trips": 12
    },
    {
      "name": "Salem MBTA - Washington at Federal St",
      "lat": 42.5235,
      "lng": -70.8961,
      "trips": 3
    },
    {
      "name": "Salem State University - North Campus",
      "lat": 42.5033,
      "lng": -70.8914,
      "trips": 1
    },
    {
      "name": "Savin Hill T Stop - S Sydney St at Bay St",
      "lat": 42.3106,
      "lng": -71.0538,
      "trips": 5
    },
    {
      "name": "Seaport Blvd at Sleeper St",
      "lat": 42.3531,
      "lng": -71.0481,
      "trips": 54
    },
    {
      "name": "Seaport Hotel - Congress St at Seaport Ln",
      "lat": 42.3488,
      "lng": -71.0417,
      "trips": 13
    },
    {
      "name": "Seaport Square - Seaport Blvd at Northern Ave",
      "lat": 42.3514,
      "lng": -71.0444,
      "trips": 38
    },
    {
      "name": "Sennott Park Broadway at Norfolk Street",
      "lat": 42.3686,
      "lng": -71.0994,
      "trips": 46
    },
    {
      "name": "Shawmut Ave at Herald St",
      "lat": 42.3466,
      "lng": -71.066,
      "trips": 15
    },
    {
      "name": "Shawmut Ave at Lenox St",
      "lat": 42.3359,
      "lng": -71.0804,
      "trips": 12
    },
    {
      "name": "Shawmut Ave at Oak St W",
      "lat": 42.3485,
      "lng": -71.0656,
      "trips": 24
    },
    {
      "name": "Shawmut T Stop",
      "lat": 42.2929,
      "lng": -71.0658,
      "trips": 6
    },
    {
      "name": "Shetland Park - Congress at Peabody St",
      "lat": 42.5184,
      "lng": -70.8895,
      "trips": 1
    },
    {
      "name": "Sidney Research Campus/Erie Street at Waverly",
      "lat": 42.3577,
      "lng": -71.1039,
      "trips": 39
    },
    {
      "name": "Silber Way",
      "lat": 42.3495,
      "lng": -71.1006,
      "trips": 26
    },
    {
      "name": "Smith Pl at Wilson Rd",
      "lat": 42.3924,
      "lng": -71.1506,
      "trips": 5
    },
    {
      "name": "Soldiers Field Park - 111 Western Ave",
      "lat": 42.3643,
      "lng": -71.1183,
      "trips": 15
    },
    {
      "name": "Somerville City Hall",
      "lat": 42.3868,
      "lng": -71.0981,
      "trips": 20
    },
    {
      "name": "Somerville City Hall Annex",
      "lat": 42.3919,
      "lng": -71.0975,
      "trips": 3
    },
    {
      "name": "Somerville High School & Central Library",
      "lat": 42.3864,
      "lng": -71.096,
      "trips": 11
    },
    {
      "name": "Somerville Hospital",
      "lat": 42.3904,
      "lng": -71.1086,
      "trips": 8
    },
    {
      "name": "South Boston Library - 646 E Broadway",
      "lat": 42.3357,
      "lng": -71.0388,
      "trips": 26
    },
    {
      "name": "South End Library - Tremont St at W Newton St",
      "lat": 42.3413,
      "lng": -71.0768,
      "trips": 39
    },
    {
      "name": "South Station - 700 Atlantic Ave",
      "lat": 42.3522,
      "lng": -71.0555,
      "trips": 89
    },
    {
      "name": "Spaulding Rehabilitation Hospital - Charlestown Navy Yard",
      "lat": 42.3783,
      "lng": -71.0489,
      "trips": 29
    },
    {
      "name": "St Mary's",
      "lat": 42.3462,
      "lng": -71.1073,
      "trips": 24
    },
    {
      "name": "St. Alphonsus St at Tremont St",
      "lat": 42.3333,
      "lng": -71.1012,
      "trips": 32
    },
    {
      "name": "Staniford St at Merrimac St",
      "lat": 42.3636,
      "lng": -71.0637,
      "trips": 22
    },
    {
      "name": "State Street at Channel Center",
      "lat": 42.3441,
      "lng": -71.0526,
      "trips": 19
    },
    {
      "name": "Stony Brook T Stop",
      "lat": 42.317,
      "lng": -71.1044,
      "trips": 14
    },
    {
      "name": "Stuart St at Berkeley St",
      "lat": 42.3495,
      "lng": -71.0724,
      "trips": 41
    },
    {
      "name": "Stuart St at Charles St",
      "lat": 42.3511,
      "lng": -71.0663,
      "trips": 26
    },
    {
      "name": "Stuart St at Church St",
      "lat": 42.3507,
      "lng": -71.0683,
      "trips": 8
    },
    {
      "name": "Sullivan Square",
      "lat": 42.3845,
      "lng": -71.0751,
      "trips": 10
    },
    {
      "name": "Sumner St at Shirley Ave",
      "lat": 42.4083,
      "lng": -70.998,
      "trips": 1
    },
    {
      "name": "Surface Rd at India St",
      "lat": 42.3582,
      "lng": -71.0522,
      "trips": 49
    },
    {
      "name": "Surface Rd at Summer St",
      "lat": 42.3529,
      "lng": -71.0566,
      "trips": 47
    },
    {
      "name": "Swan Place at Minuteman Bikeway",
      "lat": 42.4147,
      "lng": -71.1524,
      "trips": 8
    },
    {
      "name": "Swan St. Park",
      "lat": 42.4125,
      "lng": -71.0584,
      "trips": 1
    },
    {
      "name": "Sydney St at Carson St",
      "lat": 42.3204,
      "lng": -71.0536,
      "trips": 9
    },
    {
      "name": "Talbot Ave At Blue Hill Ave",
      "lat": 42.2946,
      "lng": -71.0871,
      "trips": 7
    },
    {
      "name": "Talbot Ave T Station",
      "lat": 42.2923,
      "lng": -71.078,
      "trips": 1
    },
    {
      "name": "Tappan St at Brookline Hills MBTA",
      "lat": 42.3314,
      "lng": -71.1269,
      "trips": 8
    },
    {
      "name": "Teele Square",
      "lat": 42.4009,
      "lng": -71.1259,
      "trips": 22
    },
    {
      "name": "The Dimock Center",
      "lat": 42.3193,
      "lng": -71.0964,
      "trips": 3
    },
    {
      "name": "The Eddy - New St at Sumner St",
      "lat": 42.3707,
      "lng": -71.0442,
      "trips": 1
    },
    {
      "name": "The Lawn on D",
      "lat": 42.3448,
      "lng": -71.044,
      "trips": 18
    },
    {
      "name": "The Overlook at St. Gabriel's",
      "lat": 42.3468,
      "lng": -71.1455,
      "trips": 21
    },
    {
      "name": "Third at Binney",
      "lat": 42.3654,
      "lng": -71.0828,
      "trips": 37
    },
    {
      "name": "Thorndike Field at Minuteman Bikeway",
      "lat": 42.4002,
      "lng": -71.1446,
      "trips": 8
    },
    {
      "name": "Tremont St at Court St",
      "lat": 42.3591,
      "lng": -71.0597,
      "trips": 19
    },
    {
      "name": "Tremont St at E Berkeley St",
      "lat": 42.3454,
      "lng": -71.0696,
      "trips": 39
    },
    {
      "name": "Tremont St at Hamilton Pl",
      "lat": 42.3567,
      "lng": -71.0617,
      "trips": 25
    },
    {
      "name": "Tremont St at Northampton St",
      "lat": 42.3384,
      "lng": -71.0817,
      "trips": 31
    },
    {
      "name": "Tremont St at W. Dedham St",
      "lat": 42.3425,
      "lng": -71.0742,
      "trips": 32
    },
    {
      "name": "Tremont St at West St",
      "lat": 42.355,
      "lng": -71.0633,
      "trips": 20
    },
    {
      "name": "Troy Boston",
      "lat": 42.3437,
      "lng": -71.0623,
      "trips": 14
    },
    {
      "name": "Tufts Sq - Main St at Medford St",
      "lat": 42.4017,
      "lng": -71.1061,
      "trips": 6
    },
    {
      "name": "Union Square - Brighton Ave at Cambridge St",
      "lat": 42.3533,
      "lng": -71.1373,
      "trips": 47
    },
    {
      "name": "Union Square - Somerville",
      "lat": 42.3796,
      "lng": -71.0954,
      "trips": 44
    },
    {
      "name": "Union Square East",
      "lat": 42.3801,
      "lng": -71.0901,
      "trips": 16
    },
    {
      "name": "Union Square Station",
      "lat": 42.3773,
      "lng": -71.0944,
      "trips": 14
    },
    {
      "name": "University Park",
      "lat": 42.3627,
      "lng": -71.1,
      "trips": 25
    },
    {
      "name": "University of Massachusetts Boston - Campus Center",
      "lat": 42.3122,
      "lng": -71.0365,
      "trips": 1
    },
    {
      "name": "Uphams Corner T Stop - Magnolia St at Dudley St",
      "lat": 42.3187,
      "lng": -71.0698,
      "trips": 5
    },
    {
      "name": "Valenti Way at Haverhill St",
      "lat": 42.3645,
      "lng": -71.0591,
      "trips": 84
    },
    {
      "name": "Vassal Lane at Tobin/VLUS",
      "lat": 42.3854,
      "lng": -71.1378,
      "trips": 3
    },
    {
      "name": "Verizon Innovation Hub 10 Ware Street",
      "lat": 42.3725,
      "lng": -71.1131,
      "trips": 19
    },
    {
      "name": "W Broadway at D St",
      "lat": 42.3391,
      "lng": -71.0514,
      "trips": 47
    },
    {
      "name": "W Broadway at Dorchester St",
      "lat": 42.336,
      "lng": -71.0462,
      "trips": 31
    },
    {
      "name": "Walnut Ave at School St",
      "lat": 42.3124,
      "lng": -71.0962,
      "trips": 5
    },
    {
      "name": "Warren St at Chelsea St",
      "lat": 42.3718,
      "lng": -71.0603,
      "trips": 50
    },
    {
      "name": "Washington Sq",
      "lat": 42.3399,
      "lng": -71.1342,
      "trips": 18
    },
    {
      "name": "Washington St at Brock St",
      "lat": 42.349,
      "lng": -71.1603,
      "trips": 9
    },
    {
      "name": "Washington St at Lenox St",
      "lat": 42.3351,
      "lng": -71.079,
      "trips": 34
    },
    {
      "name": "Washington St at Melnea Cass Blvd",
      "lat": 42.3328,
      "lng": -71.0812,
      "trips": 8
    },
    {
      "name": "Washington St at Myrtle St",
      "lat": 42.3818,
      "lng": -71.084,
      "trips": 14
    },
    {
      "name": "Washington St at Rutland St",
      "lat": 42.3385,
      "lng": -71.074,
      "trips": 67
    },
    {
      "name": "Washington St at Talbot Ave",
      "lat": 42.2903,
      "lng": -71.0718,
      "trips": 4
    },
    {
      "name": "Washington St at Temple Pl",
      "lat": 42.355,
      "lng": -71.061,
      "trips": 44
    },
    {
      "name": "Washington St at Waltham St",
      "lat": 42.3416,
      "lng": -71.0689,
      "trips": 56
    },
    {
      "name": "Watermark Seaport - Boston Wharf Rd at Seaport Blvd",
      "lat": 42.3516,
      "lng": -71.0457,
      "trips": 42
    },
    {
      "name": "Watertown City Hall",
      "lat": 42.3676,
      "lng": -71.1875,
      "trips": 4
    },
    {
      "name": "Watertown Sq",
      "lat": 42.3653,
      "lng": -71.1857,
      "trips": 3
    },
    {
      "name": "Watertown St at 5th Ave",
      "lat": 42.3629,
      "lng": -71.1913,
      "trips": 1
    },
    {
      "name": "Wellington MBTA",
      "lat": 42.4024,
      "lng": -71.0757,
      "trips": 5
    },
    {
      "name": "Wentworth Institute of Technology - Huntington Ave at Vancouver St",
      "lat": 42.3376,
      "lng": -71.0963,
      "trips": 13
    },
    {
      "name": "West End Park",
      "lat": 42.3659,
      "lng": -71.0645,
      "trips": 14
    },
    {
      "name": "West Medford Square (Bower St at Harvard Ave)",
      "lat": 42.4206,
      "lng": -71.1335,
      "trips": 3
    },
    {
      "name": "Western Ave at Everett St",
      "lat": 42.3632,
      "lng": -71.1347,
      "trips": 12
    },
    {
      "name": "Western Ave at Leo Birmingham Pkwy",
      "lat": 42.3616,
      "lng": -71.1451,
      "trips": 2
    },
    {
      "name": "Whittier St Health Center",
      "lat": 42.3329,
      "lng": -71.0922,
      "trips": 5
    },
    {
      "name": "Williams St at Washington St",
      "lat": 42.3065,
      "lng": -71.1077,
      "trips": 13
    },
    {
      "name": "Wilson Square",
      "lat": 42.3857,
      "lng": -71.1141,
      "trips": 16
    },
    {
      "name": "Winthrop Circle",
      "lat": 42.4214,
      "lng": -71.1176,
      "trips": 3
    }
  ],
  "daily_usage_altair": {
  "config": {
    "view": {
      "continuousWidth": 1000,
      "continuousHeight": 300,
      "fill": "#ffffff",
      "strokeWidth": 0
    },
    "facet": {
      "spacing": 10
    },
    "header": {
      "labelOrient": "bottom",
      "labelPadding": 10
    },
    "legend": {
      "cornerRadius": 5,
      "labelFontSize": 11,
      "offset": 0,
      "orient": "top",
      "padding": 10,
      "titleFontSize": 12
    }
  },
  "data": {
    "name": "data-a647ef730115f34ef8a549bc13b0ef14"
  },
  "transform": [
    {
      "calculate": "datum.day_of_week === 'Saturday' || datum.day_of_week === 'Sunday' ? 'Weekend' : 'Weekday'",
      "as": "day_type"
    }
  ],
  "facet": {
    "column": {
      "field": "day_type",
      "header": {
        "labelColor": "#333333",
        "labelFontSize": 12,
        "labelOrient": "top",
        "labelPadding": 10,
        "title": null
      },
      "sort": ["Weekday", "Weekend"],
      "type": "nominal"
    }
  },
  "spec": {
    "layer": [
      {
        "mark": {
          "type": "line",
          "size": 2
        },
        "encoding": {
          "color": {
            "field": "member_casual",
            "scale": {
              "domain": [
                "member",
                "casual"
              ],
              "range": [
                "#4C78A8",
                "#F58518"
              ]
            },
            "title": "User Type",
            "type": "nominal"
          },
          "opacity": {
            "condition": {
              "param": "param_1",
              "value": 1
            },
            "value": 0.2
          },
          "tooltip": [
            {
              "field": "hour",
              "type": "quantitative"
            },
            {
              "field": "trips",
              "type": "quantitative"
            },
            {
              "field": "member_casual",
              "type": "nominal"
            },
            {
              "field": "day_of_week",
              "type": "nominal"
            }
          ],
          "x": {
            "axis": {
              "title": "Hour of Day"
            },
            "field": "hour",
            "scale": {
              "domain": [
                0,
                23
              ]
            },
            "type": "quantitative"
          },
          "y": {
            "axis": {
              "title": "Number of Trips"
            },
            "field": "trips",
            "type": "quantitative"
          }
        },
        "name": "view_1"
      },
      {
        "mark": {
          "type": "circle",
          "opacity": 0.5,
          "size": 30
        },
        "encoding": {
          "color": {
            "field": "member_casual",
            "scale": {
              "domain": [
                "member",
                "casual"
              ],
              "range": [
                "#4C78A8",
                "#F58518"
              ]
            },
            "title": "User Type",
            "type": "nominal"
          },
          "opacity": {
            "condition": {
              "param": "param_1",
              "value": 1
            },
            "value": 0.2
          },
          "tooltip": [
            {
              "field": "hour",
              "type": "quantitative"
            },
            {
              "field": "trips",
              "type": "quantitative"
            },
            {
              "field": "member_casual",
              "type": "nominal"
            },
            {
              "field": "day_of_week",
              "type": "nominal"
            }
          ],
          "x": {
            "axis": {
              "title": "Hour of Day"
            },
            "field": "hour",
            "scale": {
              "domain": [
                0,
                23
              ]
            },
            "type": "quantitative"
          },
          "y": {
            "axis": {
              "title": "Number of Trips"
            },
            "field": "trips",
            "type": "quantitative"
          }
        }
      }
    ],
    "height": 300,
    "width": 140
  },
  "padding": {
    "left": 50,
    "right": 50,
    "top": 50,
    "bottom": 50
  },
  "params": [
    {
      "name": "param_1",
      "select": {
        "type": "point",
        "fields": [
          "member_casual"
        ]
      },
      "views": [
        "view_1"
      ]
    }
  ],
  "title": {
    "text": "Hourly Trip Distribution by Day and User Type",
    "anchor": "middle",
    "color": "#333333",
    "dy": 10,
    "fontSize": 20,
    "fontWeight": "normal"
  },
    "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json",
    "datasets": {
      "data-a647ef730115f34ef8a549bc13b0ef14": [
        {
          "day_of_week": "Monday",
          "hour": 0,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Monday",
          "hour": 0,
          "member_casual": "member",
          "trips": 4
        },
        {
          "day_of_week": "Monday",
          "hour": 1,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Monday",
          "hour": 1,
          "member_casual": "member",
          "trips": 3
        },
        {
          "day_of_week": "Monday",
          "hour": 2,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Monday",
          "hour": 4,
          "member_casual": "member",
          "trips": 3
        },
        {
          "day_of_week": "Monday",
          "hour": 5,
          "member_casual": "member",
          "trips": 8
        },
        {
          "day_of_week": "Monday",
          "hour": 6,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Monday",
          "hour": 6,
          "member_casual": "member",
          "trips": 37
        },
        {
          "day_of_week": "Monday",
          "hour": 7,
          "member_casual": "casual",
          "trips": 5
        },
        {
          "day_of_week": "Monday",
          "hour": 7,
          "member_casual": "member",
          "trips": 76
        },
        {
          "day_of_week": "Monday",
          "hour": 8,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Monday",
          "hour": 8,
          "member_casual": "member",
          "trips": 121
        },
        {
          "day_of_week": "Monday",
          "hour": 9,
          "member_casual": "casual",
          "trips": 7
        },
        {
          "day_of_week": "Monday",
          "hour": 9,
          "member_casual": "member",
          "trips": 70
        },
        {
          "day_of_week": "Monday",
          "hour": 10,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Monday",
          "hour": 10,
          "member_casual": "member",
          "trips": 43
        },
        {
          "day_of_week": "Monday",
          "hour": 11,
          "member_casual": "casual",
          "trips": 10
        },
        {
          "day_of_week": "Monday",
          "hour": 11,
          "member_casual": "member",
          "trips": 26
        },
        {
          "day_of_week": "Monday",
          "hour": 12,
          "member_casual": "casual",
          "trips": 7
        },
        {
          "day_of_week": "Monday",
          "hour": 12,
          "member_casual": "member",
          "trips": 52
        },
        {
          "day_of_week": "Monday",
          "hour": 13,
          "member_casual": "casual",
          "trips": 5
        },
        {
          "day_of_week": "Monday",
          "hour": 13,
          "member_casual": "member",
          "trips": 42
        },
        {
          "day_of_week": "Monday",
          "hour": 14,
          "member_casual": "casual",
          "trips": 14
        },
        {
          "day_of_week": "Monday",
          "hour": 14,
          "member_casual": "member",
          "trips": 63
        },
        {
          "day_of_week": "Monday",
          "hour": 15,
          "member_casual": "casual",
          "trips": 13
        },
        {
          "day_of_week": "Monday",
          "hour": 15,
          "member_casual": "member",
          "trips": 80
        },
        {
          "day_of_week": "Monday",
          "hour": 16,
          "member_casual": "casual",
          "trips": 15
        },
        {
          "day_of_week": "Monday",
          "hour": 16,
          "member_casual": "member",
          "trips": 131
        },
        {
          "day_of_week": "Monday",
          "hour": 17,
          "member_casual": "casual",
          "trips": 19
        },
        {
          "day_of_week": "Monday",
          "hour": 17,
          "member_casual": "member",
          "trips": 144
        },
        {
          "day_of_week": "Monday",
          "hour": 18,
          "member_casual": "casual",
          "trips": 9
        },
        {
          "day_of_week": "Monday",
          "hour": 18,
          "member_casual": "member",
          "trips": 101
        },
        {
          "day_of_week": "Monday",
          "hour": 19,
          "member_casual": "casual",
          "trips": 6
        },
        {
          "day_of_week": "Monday",
          "hour": 19,
          "member_casual": "member",
          "trips": 71
        },
        {
          "day_of_week": "Monday",
          "hour": 20,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Monday",
          "hour": 20,
          "member_casual": "member",
          "trips": 39
        },
        {
          "day_of_week": "Monday",
          "hour": 21,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Monday",
          "hour": 21,
          "member_casual": "member",
          "trips": 28
        },
        {
          "day_of_week": "Monday",
          "hour": 22,
          "member_casual": "casual",
          "trips": 4
        },
        {
          "day_of_week": "Monday",
          "hour": 22,
          "member_casual": "member",
          "trips": 23
        },
        {
          "day_of_week": "Monday",
          "hour": 23,
          "member_casual": "member",
          "trips": 10
        },
        {
          "day_of_week": "Tuesday",
          "hour": 0,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Tuesday",
          "hour": 0,
          "member_casual": "member",
          "trips": 2
        },
        {
          "day_of_week": "Tuesday",
          "hour": 1,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Tuesday",
          "hour": 1,
          "member_casual": "member",
          "trips": 4
        },
        {
          "day_of_week": "Tuesday",
          "hour": 2,
          "member_casual": "member",
          "trips": 3
        },
        {
          "day_of_week": "Tuesday",
          "hour": 4,
          "member_casual": "member",
          "trips": 3
        },
        {
          "day_of_week": "Tuesday",
          "hour": 5,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Tuesday",
          "hour": 5,
          "member_casual": "member",
          "trips": 8
        },
        {
          "day_of_week": "Tuesday",
          "hour": 6,
          "member_casual": "casual",
          "trips": 4
        },
        {
          "day_of_week": "Tuesday",
          "hour": 6,
          "member_casual": "member",
          "trips": 31
        },
        {
          "day_of_week": "Tuesday",
          "hour": 7,
          "member_casual": "casual",
          "trips": 12
        },
        {
          "day_of_week": "Tuesday",
          "hour": 7,
          "member_casual": "member",
          "trips": 104
        },
        {
          "day_of_week": "Tuesday",
          "hour": 8,
          "member_casual": "casual",
          "trips": 15
        },
        {
          "day_of_week": "Tuesday",
          "hour": 8,
          "member_casual": "member",
          "trips": 165
        },
        {
          "day_of_week": "Tuesday",
          "hour": 9,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Tuesday",
          "hour": 9,
          "member_casual": "member",
          "trips": 104
        },
        {
          "day_of_week": "Tuesday",
          "hour": 10,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Tuesday",
          "hour": 10,
          "member_casual": "member",
          "trips": 46
        },
        {
          "day_of_week": "Tuesday",
          "hour": 11,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Tuesday",
          "hour": 11,
          "member_casual": "member",
          "trips": 50
        },
        {
          "day_of_week": "Tuesday",
          "hour": 12,
          "member_casual": "casual",
          "trips": 6
        },
        {
          "day_of_week": "Tuesday",
          "hour": 12,
          "member_casual": "member",
          "trips": 36
        },
        {
          "day_of_week": "Tuesday",
          "hour": 13,
          "member_casual": "casual",
          "trips": 5
        },
        {
          "day_of_week": "Tuesday",
          "hour": 13,
          "member_casual": "member",
          "trips": 51
        },
        {
          "day_of_week": "Tuesday",
          "hour": 14,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Tuesday",
          "hour": 14,
          "member_casual": "member",
          "trips": 63
        },
        {
          "day_of_week": "Tuesday",
          "hour": 15,
          "member_casual": "casual",
          "trips": 9
        },
        {
          "day_of_week": "Tuesday",
          "hour": 15,
          "member_casual": "member",
          "trips": 78
        },
        {
          "day_of_week": "Tuesday",
          "hour": 16,
          "member_casual": "casual",
          "trips": 14
        },
        {
          "day_of_week": "Tuesday",
          "hour": 16,
          "member_casual": "member",
          "trips": 102
        },
        {
          "day_of_week": "Tuesday",
          "hour": 17,
          "member_casual": "casual",
          "trips": 19
        },
        {
          "day_of_week": "Tuesday",
          "hour": 17,
          "member_casual": "member",
          "trips": 172
        },
        {
          "day_of_week": "Tuesday",
          "hour": 18,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Tuesday",
          "hour": 18,
          "member_casual": "member",
          "trips": 124
        },
        {
          "day_of_week": "Tuesday",
          "hour": 19,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Tuesday",
          "hour": 19,
          "member_casual": "member",
          "trips": 88
        },
        {
          "day_of_week": "Tuesday",
          "hour": 20,
          "member_casual": "casual",
          "trips": 9
        },
        {
          "day_of_week": "Tuesday",
          "hour": 20,
          "member_casual": "member",
          "trips": 54
        },
        {
          "day_of_week": "Tuesday",
          "hour": 21,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Tuesday",
          "hour": 21,
          "member_casual": "member",
          "trips": 33
        },
        {
          "day_of_week": "Tuesday",
          "hour": 22,
          "member_casual": "casual",
          "trips": 4
        },
        {
          "day_of_week": "Tuesday",
          "hour": 22,
          "member_casual": "member",
          "trips": 14
        },
        {
          "day_of_week": "Tuesday",
          "hour": 23,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Tuesday",
          "hour": 23,
          "member_casual": "member",
          "trips": 13
        },
        {
          "day_of_week": "Wednesday",
          "hour": 0,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Wednesday",
          "hour": 0,
          "member_casual": "member",
          "trips": 15
        },
        {
          "day_of_week": "Wednesday",
          "hour": 1,
          "member_casual": "casual",
          "trips": 7
        },
        {
          "day_of_week": "Wednesday",
          "hour": 1,
          "member_casual": "member",
          "trips": 8
        },
        {
          "day_of_week": "Wednesday",
          "hour": 2,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Wednesday",
          "hour": 2,
          "member_casual": "member",
          "trips": 1
        },
        {
          "day_of_week": "Wednesday",
          "hour": 3,
          "member_casual": "member",
          "trips": 1
        },
        {
          "day_of_week": "Wednesday",
          "hour": 4,
          "member_casual": "member",
          "trips": 7
        },
        {
          "day_of_week": "Wednesday",
          "hour": 5,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Wednesday",
          "hour": 5,
          "member_casual": "member",
          "trips": 3
        },
        {
          "day_of_week": "Wednesday",
          "hour": 6,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Wednesday",
          "hour": 6,
          "member_casual": "member",
          "trips": 38
        },
        {
          "day_of_week": "Wednesday",
          "hour": 7,
          "member_casual": "casual",
          "trips": 9
        },
        {
          "day_of_week": "Wednesday",
          "hour": 7,
          "member_casual": "member",
          "trips": 90
        },
        {
          "day_of_week": "Wednesday",
          "hour": 8,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Wednesday",
          "hour": 8,
          "member_casual": "member",
          "trips": 188
        },
        {
          "day_of_week": "Wednesday",
          "hour": 9,
          "member_casual": "casual",
          "trips": 13
        },
        {
          "day_of_week": "Wednesday",
          "hour": 9,
          "member_casual": "member",
          "trips": 91
        },
        {
          "day_of_week": "Wednesday",
          "hour": 10,
          "member_casual": "casual",
          "trips": 7
        },
        {
          "day_of_week": "Wednesday",
          "hour": 10,
          "member_casual": "member",
          "trips": 66
        },
        {
          "day_of_week": "Wednesday",
          "hour": 11,
          "member_casual": "casual",
          "trips": 10
        },
        {
          "day_of_week": "Wednesday",
          "hour": 11,
          "member_casual": "member",
          "trips": 47
        },
        {
          "day_of_week": "Wednesday",
          "hour": 12,
          "member_casual": "casual",
          "trips": 10
        },
        {
          "day_of_week": "Wednesday",
          "hour": 12,
          "member_casual": "member",
          "trips": 70
        },
        {
          "day_of_week": "Wednesday",
          "hour": 13,
          "member_casual": "casual",
          "trips": 10
        },
        {
          "day_of_week": "Wednesday",
          "hour": 13,
          "member_casual": "member",
          "trips": 58
        },
        {
          "day_of_week": "Wednesday",
          "hour": 14,
          "member_casual": "casual",
          "trips": 6
        },
        {
          "day_of_week": "Wednesday",
          "hour": 14,
          "member_casual": "member",
          "trips": 63
        },
        {
          "day_of_week": "Wednesday",
          "hour": 15,
          "member_casual": "casual",
          "trips": 14
        },
        {
          "day_of_week": "Wednesday",
          "hour": 15,
          "member_casual": "member",
          "trips": 80
        },
        {
          "day_of_week": "Wednesday",
          "hour": 16,
          "member_casual": "casual",
          "trips": 20
        },
        {
          "day_of_week": "Wednesday",
          "hour": 16,
          "member_casual": "member",
          "trips": 127
        },
        {
          "day_of_week": "Wednesday",
          "hour": 17,
          "member_casual": "casual",
          "trips": 17
        },
        {
          "day_of_week": "Wednesday",
          "hour": 17,
          "member_casual": "member",
          "trips": 159
        },
        {
          "day_of_week": "Wednesday",
          "hour": 18,
          "member_casual": "casual",
          "trips": 13
        },
        {
          "day_of_week": "Wednesday",
          "hour": 18,
          "member_casual": "member",
          "trips": 119
        },
        {
          "day_of_week": "Wednesday",
          "hour": 19,
          "member_casual": "casual",
          "trips": 10
        },
        {
          "day_of_week": "Wednesday",
          "hour": 19,
          "member_casual": "member",
          "trips": 70
        },
        {
          "day_of_week": "Wednesday",
          "hour": 20,
          "member_casual": "casual",
          "trips": 10
        },
        {
          "day_of_week": "Wednesday",
          "hour": 20,
          "member_casual": "member",
          "trips": 57
        },
        {
          "day_of_week": "Wednesday",
          "hour": 21,
          "member_casual": "casual",
          "trips": 12
        },
        {
          "day_of_week": "Wednesday",
          "hour": 21,
          "member_casual": "member",
          "trips": 27
        },
        {
          "day_of_week": "Wednesday",
          "hour": 22,
          "member_casual": "casual",
          "trips": 7
        },
        {
          "day_of_week": "Wednesday",
          "hour": 22,
          "member_casual": "member",
          "trips": 27
        },
        {
          "day_of_week": "Wednesday",
          "hour": 23,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Wednesday",
          "hour": 23,
          "member_casual": "member",
          "trips": 14
        },
        {
          "day_of_week": "Thursday",
          "hour": 0,
          "member_casual": "member",
          "trips": 4
        },
        {
          "day_of_week": "Thursday",
          "hour": 1,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Thursday",
          "hour": 1,
          "member_casual": "member",
          "trips": 3
        },
        {
          "day_of_week": "Thursday",
          "hour": 2,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Thursday",
          "hour": 2,
          "member_casual": "member",
          "trips": 1
        },
        {
          "day_of_week": "Thursday",
          "hour": 4,
          "member_casual": "member",
          "trips": 3
        },
        {
          "day_of_week": "Thursday",
          "hour": 5,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Thursday",
          "hour": 5,
          "member_casual": "member",
          "trips": 13
        },
        {
          "day_of_week": "Thursday",
          "hour": 6,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Thursday",
          "hour": 6,
          "member_casual": "member",
          "trips": 28
        },
        {
          "day_of_week": "Thursday",
          "hour": 7,
          "member_casual": "casual",
          "trips": 7
        },
        {
          "day_of_week": "Thursday",
          "hour": 7,
          "member_casual": "member",
          "trips": 98
        },
        {
          "day_of_week": "Thursday",
          "hour": 8,
          "member_casual": "casual",
          "trips": 18
        },
        {
          "day_of_week": "Thursday",
          "hour": 8,
          "member_casual": "member",
          "trips": 180
        },
        {
          "day_of_week": "Thursday",
          "hour": 9,
          "member_casual": "casual",
          "trips": 15
        },
        {
          "day_of_week": "Thursday",
          "hour": 9,
          "member_casual": "member",
          "trips": 104
        },
        {
          "day_of_week": "Thursday",
          "hour": 10,
          "member_casual": "casual",
          "trips": 7
        },
        {
          "day_of_week": "Thursday",
          "hour": 10,
          "member_casual": "member",
          "trips": 82
        },
        {
          "day_of_week": "Thursday",
          "hour": 11,
          "member_casual": "casual",
          "trips": 9
        },
        {
          "day_of_week": "Thursday",
          "hour": 11,
          "member_casual": "member",
          "trips": 62
        },
        {
          "day_of_week": "Thursday",
          "hour": 12,
          "member_casual": "casual",
          "trips": 6
        },
        {
          "day_of_week": "Thursday",
          "hour": 12,
          "member_casual": "member",
          "trips": 83
        },
        {
          "day_of_week": "Thursday",
          "hour": 13,
          "member_casual": "casual",
          "trips": 14
        },
        {
          "day_of_week": "Thursday",
          "hour": 13,
          "member_casual": "member",
          "trips": 70
        },
        {
          "day_of_week": "Thursday",
          "hour": 14,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Thursday",
          "hour": 14,
          "member_casual": "member",
          "trips": 78
        },
        {
          "day_of_week": "Thursday",
          "hour": 15,
          "member_casual": "casual",
          "trips": 19
        },
        {
          "day_of_week": "Thursday",
          "hour": 15,
          "member_casual": "member",
          "trips": 91
        },
        {
          "day_of_week": "Thursday",
          "hour": 16,
          "member_casual": "casual",
          "trips": 15
        },
        {
          "day_of_week": "Thursday",
          "hour": 16,
          "member_casual": "member",
          "trips": 148
        },
        {
          "day_of_week": "Thursday",
          "hour": 17,
          "member_casual": "casual",
          "trips": 18
        },
        {
          "day_of_week": "Thursday",
          "hour": 17,
          "member_casual": "member",
          "trips": 196
        },
        {
          "day_of_week": "Thursday",
          "hour": 18,
          "member_casual": "casual",
          "trips": 23
        },
        {
          "day_of_week": "Thursday",
          "hour": 18,
          "member_casual": "member",
          "trips": 144
        },
        {
          "day_of_week": "Thursday",
          "hour": 19,
          "member_casual": "casual",
          "trips": 15
        },
        {
          "day_of_week": "Thursday",
          "hour": 19,
          "member_casual": "member",
          "trips": 84
        },
        {
          "day_of_week": "Thursday",
          "hour": 20,
          "member_casual": "casual",
          "trips": 9
        },
        {
          "day_of_week": "Thursday",
          "hour": 20,
          "member_casual": "member",
          "trips": 66
        },
        {
          "day_of_week": "Thursday",
          "hour": 21,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Thursday",
          "hour": 21,
          "member_casual": "member",
          "trips": 34
        },
        {
          "day_of_week": "Thursday",
          "hour": 22,
          "member_casual": "casual",
          "trips": 6
        },
        {
          "day_of_week": "Thursday",
          "hour": 22,
          "member_casual": "member",
          "trips": 24
        },
        {
          "day_of_week": "Thursday",
          "hour": 23,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Thursday",
          "hour": 23,
          "member_casual": "member",
          "trips": 17
        },
        {
          "day_of_week": "Friday",
          "hour": 0,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Friday",
          "hour": 0,
          "member_casual": "member",
          "trips": 6
        },
        {
          "day_of_week": "Friday",
          "hour": 1,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Friday",
          "hour": 1,
          "member_casual": "member",
          "trips": 3
        },
        {
          "day_of_week": "Friday",
          "hour": 2,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Friday",
          "hour": 2,
          "member_casual": "member",
          "trips": 6
        },
        {
          "day_of_week": "Friday",
          "hour": 3,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Friday",
          "hour": 3,
          "member_casual": "member",
          "trips": 2
        },
        {
          "day_of_week": "Friday",
          "hour": 4,
          "member_casual": "member",
          "trips": 7
        },
        {
          "day_of_week": "Friday",
          "hour": 5,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Friday",
          "hour": 5,
          "member_casual": "member",
          "trips": 9
        },
        {
          "day_of_week": "Friday",
          "hour": 6,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Friday",
          "hour": 6,
          "member_casual": "member",
          "trips": 25
        },
        {
          "day_of_week": "Friday",
          "hour": 7,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Friday",
          "hour": 7,
          "member_casual": "member",
          "trips": 95
        },
        {
          "day_of_week": "Friday",
          "hour": 8,
          "member_casual": "casual",
          "trips": 12
        },
        {
          "day_of_week": "Friday",
          "hour": 8,
          "member_casual": "member",
          "trips": 160
        },
        {
          "day_of_week": "Friday",
          "hour": 9,
          "member_casual": "casual",
          "trips": 12
        },
        {
          "day_of_week": "Friday",
          "hour": 9,
          "member_casual": "member",
          "trips": 123
        },
        {
          "day_of_week": "Friday",
          "hour": 10,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Friday",
          "hour": 10,
          "member_casual": "member",
          "trips": 62
        },
        {
          "day_of_week": "Friday",
          "hour": 11,
          "member_casual": "casual",
          "trips": 14
        },
        {
          "day_of_week": "Friday",
          "hour": 11,
          "member_casual": "member",
          "trips": 63
        },
        {
          "day_of_week": "Friday",
          "hour": 12,
          "member_casual": "casual",
          "trips": 15
        },
        {
          "day_of_week": "Friday",
          "hour": 12,
          "member_casual": "member",
          "trips": 77
        },
        {
          "day_of_week": "Friday",
          "hour": 13,
          "member_casual": "casual",
          "trips": 21
        },
        {
          "day_of_week": "Friday",
          "hour": 13,
          "member_casual": "member",
          "trips": 78
        },
        {
          "day_of_week": "Friday",
          "hour": 14,
          "member_casual": "casual",
          "trips": 12
        },
        {
          "day_of_week": "Friday",
          "hour": 14,
          "member_casual": "member",
          "trips": 70
        },
        {
          "day_of_week": "Friday",
          "hour": 15,
          "member_casual": "casual",
          "trips": 27
        },
        {
          "day_of_week": "Friday",
          "hour": 15,
          "member_casual": "member",
          "trips": 103
        },
        {
          "day_of_week": "Friday",
          "hour": 16,
          "member_casual": "casual",
          "trips": 23
        },
        {
          "day_of_week": "Friday",
          "hour": 16,
          "member_casual": "member",
          "trips": 156
        },
        {
          "day_of_week": "Friday",
          "hour": 17,
          "member_casual": "casual",
          "trips": 23
        },
        {
          "day_of_week": "Friday",
          "hour": 17,
          "member_casual": "member",
          "trips": 139
        },
        {
          "day_of_week": "Friday",
          "hour": 18,
          "member_casual": "casual",
          "trips": 14
        },
        {
          "day_of_week": "Friday",
          "hour": 18,
          "member_casual": "member",
          "trips": 104
        },
        {
          "day_of_week": "Friday",
          "hour": 19,
          "member_casual": "casual",
          "trips": 16
        },
        {
          "day_of_week": "Friday",
          "hour": 19,
          "member_casual": "member",
          "trips": 78
        },
        {
          "day_of_week": "Friday",
          "hour": 20,
          "member_casual": "casual",
          "trips": 10
        },
        {
          "day_of_week": "Friday",
          "hour": 20,
          "member_casual": "member",
          "trips": 61
        },
        {
          "day_of_week": "Friday",
          "hour": 21,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Friday",
          "hour": 21,
          "member_casual": "member",
          "trips": 48
        },
        {
          "day_of_week": "Friday",
          "hour": 22,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Friday",
          "hour": 22,
          "member_casual": "member",
          "trips": 26
        },
        {
          "day_of_week": "Friday",
          "hour": 23,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Friday",
          "hour": 23,
          "member_casual": "member",
          "trips": 19
        },
        {
          "day_of_week": "Saturday",
          "hour": 0,
          "member_casual": "casual",
          "trips": 4
        },
        {
          "day_of_week": "Saturday",
          "hour": 0,
          "member_casual": "member",
          "trips": 15
        },
        {
          "day_of_week": "Saturday",
          "hour": 1,
          "member_casual": "casual",
          "trips": 6
        },
        {
          "day_of_week": "Saturday",
          "hour": 1,
          "member_casual": "member",
          "trips": 10
        },
        {
          "day_of_week": "Saturday",
          "hour": 2,
          "member_casual": "casual",
          "trips": 5
        },
        {
          "day_of_week": "Saturday",
          "hour": 2,
          "member_casual": "member",
          "trips": 9
        },
        {
          "day_of_week": "Saturday",
          "hour": 3,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Saturday",
          "hour": 3,
          "member_casual": "member",
          "trips": 1
        },
        {
          "day_of_week": "Saturday",
          "hour": 4,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Saturday",
          "hour": 4,
          "member_casual": "member",
          "trips": 4
        },
        {
          "day_of_week": "Saturday",
          "hour": 5,
          "member_casual": "member",
          "trips": 2
        },
        {
          "day_of_week": "Saturday",
          "hour": 6,
          "member_casual": "casual",
          "trips": 4
        },
        {
          "day_of_week": "Saturday",
          "hour": 6,
          "member_casual": "member",
          "trips": 10
        },
        {
          "day_of_week": "Saturday",
          "hour": 7,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Saturday",
          "hour": 7,
          "member_casual": "member",
          "trips": 9
        },
        {
          "day_of_week": "Saturday",
          "hour": 8,
          "member_casual": "casual",
          "trips": 6
        },
        {
          "day_of_week": "Saturday",
          "hour": 8,
          "member_casual": "member",
          "trips": 19
        },
        {
          "day_of_week": "Saturday",
          "hour": 9,
          "member_casual": "casual",
          "trips": 5
        },
        {
          "day_of_week": "Saturday",
          "hour": 9,
          "member_casual": "member",
          "trips": 43
        },
        {
          "day_of_week": "Saturday",
          "hour": 10,
          "member_casual": "casual",
          "trips": 9
        },
        {
          "day_of_week": "Saturday",
          "hour": 10,
          "member_casual": "member",
          "trips": 58
        },
        {
          "day_of_week": "Saturday",
          "hour": 11,
          "member_casual": "casual",
          "trips": 14
        },
        {
          "day_of_week": "Saturday",
          "hour": 11,
          "member_casual": "member",
          "trips": 57
        },
        {
          "day_of_week": "Saturday",
          "hour": 12,
          "member_casual": "casual",
          "trips": 12
        },
        {
          "day_of_week": "Saturday",
          "hour": 12,
          "member_casual": "member",
          "trips": 66
        },
        {
          "day_of_week": "Saturday",
          "hour": 13,
          "member_casual": "casual",
          "trips": 19
        },
        {
          "day_of_week": "Saturday",
          "hour": 13,
          "member_casual": "member",
          "trips": 66
        },
        {
          "day_of_week": "Saturday",
          "hour": 14,
          "member_casual": "casual",
          "trips": 15
        },
        {
          "day_of_week": "Saturday",
          "hour": 14,
          "member_casual": "member",
          "trips": 63
        },
        {
          "day_of_week": "Saturday",
          "hour": 15,
          "member_casual": "casual",
          "trips": 14
        },
        {
          "day_of_week": "Saturday",
          "hour": 15,
          "member_casual": "member",
          "trips": 59
        },
        {
          "day_of_week": "Saturday",
          "hour": 16,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Saturday",
          "hour": 16,
          "member_casual": "member",
          "trips": 58
        },
        {
          "day_of_week": "Saturday",
          "hour": 17,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Saturday",
          "hour": 17,
          "member_casual": "member",
          "trips": 45
        },
        {
          "day_of_week": "Saturday",
          "hour": 18,
          "member_casual": "casual",
          "trips": 6
        },
        {
          "day_of_week": "Saturday",
          "hour": 18,
          "member_casual": "member",
          "trips": 32
        },
        {
          "day_of_week": "Saturday",
          "hour": 19,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Saturday",
          "hour": 19,
          "member_casual": "member",
          "trips": 30
        },
        {
          "day_of_week": "Saturday",
          "hour": 20,
          "member_casual": "casual",
          "trips": 8
        },
        {
          "day_of_week": "Saturday",
          "hour": 20,
          "member_casual": "member",
          "trips": 30
        },
        {
          "day_of_week": "Saturday",
          "hour": 21,
          "member_casual": "casual",
          "trips": 5
        },
        {
          "day_of_week": "Saturday",
          "hour": 21,
          "member_casual": "member",
          "trips": 15
        },
        {
          "day_of_week": "Saturday",
          "hour": 22,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Saturday",
          "hour": 22,
          "member_casual": "member",
          "trips": 26
        },
        {
          "day_of_week": "Saturday",
          "hour": 23,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Saturday",
          "hour": 23,
          "member_casual": "member",
          "trips": 17
        },
        {
          "day_of_week": "Sunday",
          "hour": 0,
          "member_casual": "casual",
          "trips": 4
        },
        {
          "day_of_week": "Sunday",
          "hour": 0,
          "member_casual": "member",
          "trips": 13
        },
        {
          "day_of_week": "Sunday",
          "hour": 1,
          "member_casual": "casual",
          "trips": 7
        },
        {
          "day_of_week": "Sunday",
          "hour": 1,
          "member_casual": "member",
          "trips": 4
        },
        {
          "day_of_week": "Sunday",
          "hour": 2,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Sunday",
          "hour": 2,
          "member_casual": "member",
          "trips": 5
        },
        {
          "day_of_week": "Sunday",
          "hour": 3,
          "member_casual": "member",
          "trips": 4
        },
        {
          "day_of_week": "Sunday",
          "hour": 4,
          "member_casual": "member",
          "trips": 3
        },
        {
          "day_of_week": "Sunday",
          "hour": 5,
          "member_casual": "member",
          "trips": 4
        },
        {
          "day_of_week": "Sunday",
          "hour": 6,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Sunday",
          "hour": 6,
          "member_casual": "member",
          "trips": 13
        },
        {
          "day_of_week": "Sunday",
          "hour": 7,
          "member_casual": "casual",
          "trips": 1
        },
        {
          "day_of_week": "Sunday",
          "hour": 7,
          "member_casual": "member",
          "trips": 11
        },
        {
          "day_of_week": "Sunday",
          "hour": 8,
          "member_casual": "casual",
          "trips": 7
        },
        {
          "day_of_week": "Sunday",
          "hour": 8,
          "member_casual": "member",
          "trips": 23
        },
        {
          "day_of_week": "Sunday",
          "hour": 9,
          "member_casual": "casual",
          "trips": 10
        },
        {
          "day_of_week": "Sunday",
          "hour": 9,
          "member_casual": "member",
          "trips": 41
        },
        {
          "day_of_week": "Sunday",
          "hour": 10,
          "member_casual": "casual",
          "trips": 12
        },
        {
          "day_of_week": "Sunday",
          "hour": 10,
          "member_casual": "member",
          "trips": 58
        },
        {
          "day_of_week": "Sunday",
          "hour": 11,
          "member_casual": "casual",
          "trips": 13
        },
        {
          "day_of_week": "Sunday",
          "hour": 11,
          "member_casual": "member",
          "trips": 66
        },
        {
          "day_of_week": "Sunday",
          "hour": 12,
          "member_casual": "casual",
          "trips": 25
        },
        {
          "day_of_week": "Sunday",
          "hour": 12,
          "member_casual": "member",
          "trips": 79
        },
        {
          "day_of_week": "Sunday",
          "hour": 13,
          "member_casual": "casual",
          "trips": 25
        },
        {
          "day_of_week": "Sunday",
          "hour": 13,
          "member_casual": "member",
          "trips": 74
        },
        {
          "day_of_week": "Sunday",
          "hour": 14,
          "member_casual": "casual",
          "trips": 24
        },
        {
          "day_of_week": "Sunday",
          "hour": 14,
          "member_casual": "member",
          "trips": 80
        },
        {
          "day_of_week": "Sunday",
          "hour": 15,
          "member_casual": "casual",
          "trips": 18
        },
        {
          "day_of_week": "Sunday",
          "hour": 15,
          "member_casual": "member",
          "trips": 76
        },
        {
          "day_of_week": "Sunday",
          "hour": 16,
          "member_casual": "casual",
          "trips": 16
        },
        {
          "day_of_week": "Sunday",
          "hour": 16,
          "member_casual": "member",
          "trips": 62
        },
        {
          "day_of_week": "Sunday",
          "hour": 17,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Sunday",
          "hour": 17,
          "member_casual": "member",
          "trips": 55
        },
        {
          "day_of_week": "Sunday",
          "hour": 18,
          "member_casual": "casual",
          "trips": 11
        },
        {
          "day_of_week": "Sunday",
          "hour": 18,
          "member_casual": "member",
          "trips": 54
        },
        {
          "day_of_week": "Sunday",
          "hour": 19,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Sunday",
          "hour": 19,
          "member_casual": "member",
          "trips": 34
        },
        {
          "day_of_week": "Sunday",
          "hour": 20,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Sunday",
          "hour": 20,
          "member_casual": "member",
          "trips": 30
        },
        {
          "day_of_week": "Sunday",
          "hour": 21,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Sunday",
          "hour": 21,
          "member_casual": "member",
          "trips": 26
        },
        {
          "day_of_week": "Sunday",
          "hour": 22,
          "member_casual": "casual",
          "trips": 3
        },
        {
          "day_of_week": "Sunday",
          "hour": 22,
          "member_casual": "member",
          "trips": 14
        },
        {
          "day_of_week": "Sunday",
          "hour": 23,
          "member_casual": "casual",
          "trips": 2
        },
        {
          "day_of_week": "Sunday",
          "hour": 23,
          "member_casual": "member",
          "trips": 11
        }
      ]
    }
  }
};
