var gulp = require("gulp"),
	less = require("gulp-less"),
	nano = require("gulp-cssnano"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	browserSync = require("browser-sync");

gulp.task("html", function() {
	return gulp.src("src/html/*.html")
		.pipe(gulp.dest("dist"));
});

gulp.task("app-css", function() {
	return gulp.src([
		"src/styles/main.less"
		])
		.pipe(less())
		.pipe(nano())
		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task("fonts", function() {
	return gulp.src([
		"node_modules/bootstrap/dist/fonts/*.*",
		"node_modules/font-awesome/fonts/*.*",
		"src/fonts/**/*.*"
		])
		.pipe(gulp.dest("dist/fonts"));
});

gulp.task("images", function() {
	return gulp.src("./src/images/**/*.{jpg,png,gif}")
		.pipe(gulp.dest("dist/images"));
});

gulp.task("vendor-css", function() {
	return gulp.src([
		"node_modules/bootstrap/dist/css/bootstrap.css",
		"node_modules/font-awesome/css/font-awesome.css"
		])
		.pipe(nano())
		.pipe(concat("vendor.min.css"))
		.pipe(gulp.dest("dist/css"));
});

gulp.task("vendor-js", function() {
	return gulp.src([
		"node_modules/jquery/dist/jquery.js",
		"node_modules/bootstrap/dist/js/bootstrap.js"
		])
		.pipe(concat("vendor.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

gulp.task("app-js", function() {
	return gulp.src("src/scripts/*.js")
		.pipe(gulp.dest("dist/js"));
});


gulp.task("default", ["html", "app-css", "fonts", "images", "vendor-css", "vendor-js", "app-js", "watch"]);

gulp.task("browser-sync", function() {
	browserSync({
		server: {
			baseDir: "dist"
		},
		notify: false
	});
});

gulp.task("watch", ["browser-sync"], function() {
	gulp.watch("src/styles/**/*.less", ["app-css"]);
	gulp.watch("src/**/*.html", ["html"]);
	gulp.watch("dist/**/*.html", browserSync.reload);
	gulp.watch("src/scripts/*.js", ["app-js"]);
	gulp.watch("dist/js/*.js", browserSync.reload);
});