/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

(function ($) {
    $(document).ready(function () {
        $('.comment-reply-form-settings').map(function () {
            var $self = $(this);
            var contentItemId = $self.data("contentitem-id");
            var activeCommentId = $self.data('active-comment-id');

            InitializeCommentReplyUI(contentItemId, activeCommentId);
        });

        $('.comment-reply-button').click(function () {
            var $self = $(this);
            var contentItemId = $self.data("contentitem-id");
            var commentId = $self.data('id');

            UpdateTheRepliedOnHiddenField(contentItemId, commentId);
            MoveReplyFormToBeacon(contentItemId, commentId);
            UpdateReplyButtonsUI(contentItemId, commentId);
            return false;
        });
    });

    function InitializeCommentReplyUI(contentItemId, activeCommentId) {
        UpdateTheRepliedOnHiddenField(contentItemId, activeCommentId);
        MoveReplyFormToBeacon(contentItemId, activeCommentId);
        InitializeRootReplyButtonUI();
    }

    function InitializeRootReplyButtonUI(contentItemId, activeCommentId) {
        if (activeCommentId === "root") {
            $('.comment-reply-button[data-contentitem-id="' + contentItemId + '"][data-id="root"]').hide();
        }
    }

    function UpdateTheRepliedOnHiddenField(contentItemId, commentId) {
        var $reply = $('.comments-repliedon[data-contentitem-id="' + contentItemId + '"]');
        // The ternary operator is because the UI uses root but Orchard expects the value to be empty
        $reply.val(commentId === "root" ? "" : commentId);
    }

    function UpdateReplyButtonsUI(contentItemId, commentId) {
        $('.comment-reply-button[data-contentitem-id="' + contentItemId + '"]').show();
        $('.comment-reply-button[data-contentitem-id="' + contentItemId + '"][data-id="' + commentId + '"]').fadeOut("fast");
    }

    function MoveReplyFormToBeacon(contentItemId, commentId) {
        var $replyFormBeacon = $('.comment-reply-form-beacon[data-contentitem-id="' + contentItemId + '"][data-id="' + commentId + '"]');
        $('.comment-form[data-contentitem-id="' + contentItemId + '"]')
            .slideUp("fast", function () {
                $(this)
                    .appendTo($replyFormBeacon)
                    .slideDown();
            });
    }
})(jQuery)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yY2hhcmQuQ29tbWVudHMuVGhyZWFkZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiT3JjaGFyZC5Db21tZW50cy5UaHJlYWRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCkge1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5jb21tZW50LXJlcGx5LWZvcm0tc2V0dGluZ3MnKS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJHNlbGYgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudEl0ZW1JZCA9ICRzZWxmLmRhdGEoXCJjb250ZW50aXRlbS1pZFwiKTtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUNvbW1lbnRJZCA9ICRzZWxmLmRhdGEoJ2FjdGl2ZS1jb21tZW50LWlkJyk7XHJcblxyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tbWVudFJlcGx5VUkoY29udGVudEl0ZW1JZCwgYWN0aXZlQ29tbWVudElkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmNvbW1lbnQtcmVwbHktYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJHNlbGYgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudEl0ZW1JZCA9ICRzZWxmLmRhdGEoXCJjb250ZW50aXRlbS1pZFwiKTtcclxuICAgICAgICAgICAgdmFyIGNvbW1lbnRJZCA9ICRzZWxmLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICBVcGRhdGVUaGVSZXBsaWVkT25IaWRkZW5GaWVsZChjb250ZW50SXRlbUlkLCBjb21tZW50SWQpO1xyXG4gICAgICAgICAgICBNb3ZlUmVwbHlGb3JtVG9CZWFjb24oY29udGVudEl0ZW1JZCwgY29tbWVudElkKTtcclxuICAgICAgICAgICAgVXBkYXRlUmVwbHlCdXR0b25zVUkoY29udGVudEl0ZW1JZCwgY29tbWVudElkKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZUNvbW1lbnRSZXBseVVJKGNvbnRlbnRJdGVtSWQsIGFjdGl2ZUNvbW1lbnRJZCkge1xyXG4gICAgICAgIFVwZGF0ZVRoZVJlcGxpZWRPbkhpZGRlbkZpZWxkKGNvbnRlbnRJdGVtSWQsIGFjdGl2ZUNvbW1lbnRJZCk7XHJcbiAgICAgICAgTW92ZVJlcGx5Rm9ybVRvQmVhY29uKGNvbnRlbnRJdGVtSWQsIGFjdGl2ZUNvbW1lbnRJZCk7XHJcbiAgICAgICAgSW5pdGlhbGl6ZVJvb3RSZXBseUJ1dHRvblVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZVJvb3RSZXBseUJ1dHRvblVJKGNvbnRlbnRJdGVtSWQsIGFjdGl2ZUNvbW1lbnRJZCkge1xyXG4gICAgICAgIGlmIChhY3RpdmVDb21tZW50SWQgPT09IFwicm9vdFwiKSB7XHJcbiAgICAgICAgICAgICQoJy5jb21tZW50LXJlcGx5LWJ1dHRvbltkYXRhLWNvbnRlbnRpdGVtLWlkPVwiJyArIGNvbnRlbnRJdGVtSWQgKyAnXCJdW2RhdGEtaWQ9XCJyb290XCJdJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBVcGRhdGVUaGVSZXBsaWVkT25IaWRkZW5GaWVsZChjb250ZW50SXRlbUlkLCBjb21tZW50SWQpIHtcclxuICAgICAgICB2YXIgJHJlcGx5ID0gJCgnLmNvbW1lbnRzLXJlcGxpZWRvbltkYXRhLWNvbnRlbnRpdGVtLWlkPVwiJyArIGNvbnRlbnRJdGVtSWQgKyAnXCJdJyk7XHJcbiAgICAgICAgLy8gVGhlIHRlcm5hcnkgb3BlcmF0b3IgaXMgYmVjYXVzZSB0aGUgVUkgdXNlcyByb290IGJ1dCBPcmNoYXJkIGV4cGVjdHMgdGhlIHZhbHVlIHRvIGJlIGVtcHR5XHJcbiAgICAgICAgJHJlcGx5LnZhbChjb21tZW50SWQgPT09IFwicm9vdFwiID8gXCJcIiA6IGNvbW1lbnRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gVXBkYXRlUmVwbHlCdXR0b25zVUkoY29udGVudEl0ZW1JZCwgY29tbWVudElkKSB7XHJcbiAgICAgICAgJCgnLmNvbW1lbnQtcmVwbHktYnV0dG9uW2RhdGEtY29udGVudGl0ZW0taWQ9XCInICsgY29udGVudEl0ZW1JZCArICdcIl0nKS5zaG93KCk7XHJcbiAgICAgICAgJCgnLmNvbW1lbnQtcmVwbHktYnV0dG9uW2RhdGEtY29udGVudGl0ZW0taWQ9XCInICsgY29udGVudEl0ZW1JZCArICdcIl1bZGF0YS1pZD1cIicgKyBjb21tZW50SWQgKyAnXCJdJykuZmFkZU91dChcImZhc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTW92ZVJlcGx5Rm9ybVRvQmVhY29uKGNvbnRlbnRJdGVtSWQsIGNvbW1lbnRJZCkge1xyXG4gICAgICAgIHZhciAkcmVwbHlGb3JtQmVhY29uID0gJCgnLmNvbW1lbnQtcmVwbHktZm9ybS1iZWFjb25bZGF0YS1jb250ZW50aXRlbS1pZD1cIicgKyBjb250ZW50SXRlbUlkICsgJ1wiXVtkYXRhLWlkPVwiJyArIGNvbW1lbnRJZCArICdcIl0nKTtcclxuICAgICAgICAkKCcuY29tbWVudC1mb3JtW2RhdGEtY29udGVudGl0ZW0taWQ9XCInICsgY29udGVudEl0ZW1JZCArICdcIl0nKVxyXG4gICAgICAgICAgICAuc2xpZGVVcChcImZhc3RcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbygkcmVwbHlGb3JtQmVhY29uKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zbGlkZURvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pKGpRdWVyeSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=