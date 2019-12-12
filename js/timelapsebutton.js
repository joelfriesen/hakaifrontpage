jQuery(function($) {
    $(document).ready(function(){
            $('#insert-timelapse').click(open_media_window);
        });

    function open_media_window() {
    if (this.window === undefined) {
        this.window = wp.media({
                title: 'Insert a time lapse fading image gallery',
                multiple: true,
                button: {text: 'Insert'}
            });

        var self = this; 
        this.window.on('select', function() {
                var files = self.window.state().get('selection').toArray();
                var first = files[0].toJSON();
                var second = files[1].toJSON();
                //var first = self.window.state().get('selection').first().toJSON();
                wp.media.editor.insert('[timelapse ids="' + first.id + ',' + second.id + '"]');
            });
    }

    this.window.open();
    return false;
    }
});