import Browser
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)


main =
  Browser.sandbox { init = init, update = update, view = view }


-- MODEL

type alias Model = Int

init : Model
init =
  0


-- UPDATE

type Msg = Increment | Decrement

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1


-- VIEW

view : Model -> Html Msg
view model =
  div [style "padding" "20px", style "font-size" "20px", align "center"]
    [ button [ style "margin" "20px", style "width" "40px", style "height" "40px", style "font-size" "1.3em", style "background" "rgb(216, 255, 240)", style "border-radius" "5px", onClick Decrement ] [ text "-" ]
    , div [ style "display" "inline-block" ] [ text (String.fromInt model) ]
    , button [ style "margin" "20px", style "width" "40px", style "height" "40px", style "font-size" "1.3em", style "background" "rgb(216, 255, 240)", style "border-radius" "5px", onClick Increment ] [ text "+" ]
    ]