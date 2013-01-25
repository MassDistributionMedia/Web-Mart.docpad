YUI().use "node", "event", (Y) ->

	Y.one(".one-time-bubble").hide()

	Y.one(".one-time-599").on "mouseenter", ->
		Y.one(".one-time-bubble").show()
	Y.one(".one-time-599").on "mouseleave", ->
		Y.one(".one-time-bubble").hide()
