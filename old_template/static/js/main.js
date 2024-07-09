// Bibtex
function toggle_visibility(block_id) {
	var e = document.getElementById(block_id);
	if (e.style.display == 'block')
		e.style.display = 'none';
	else
		e.style.display = 'block';
}
