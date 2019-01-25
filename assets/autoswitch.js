$(document).ready(function() {
    $(".tire-size").keyup(function () {
        $this=$(this);
        if ($this.val().length >= $this.data("maxlength")) {
            if($this.val().length > $this.data("maxlength")) {
                $this.val($this.val().substring(0, $this.data("maxlength")));
            }
            var next = $this.next(".tire-size");
            next.val("")
            next.focus()
        }
    });

    $(".tread-depth").keyup(function () {
        $this=$(this);
        if ($this.val().length >= $this.data("maxlength")) {
            if($this.val().length > $this.data("maxlength")) {
                $this.val($this.val().substring(0, $this.data("maxlength")));
            }
            var next = $this.next(".tread-depth");
            next.val("")
            next.focus()
        }
    });
});