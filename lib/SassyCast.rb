base_directory  = File.expand_path(File.join(File.dirname(__FILE__), '..'))
stylesheets_path = File.join(base_directory, 'stylesheets')

if (defined? Compass)
  Compass::Frameworks.register('SassyCast', :stylesheets_directory => stylesheets_path)
else
  # compass not found, register on the Sass path via the environment.
  if ENV.has_key?("SASS_PATH")
    ENV["SASS_PATH"] = ENV["SASS_PATH"] + File::PATH_SEPARATOR + stylesheets_path
  else
    ENV["SASS_PATH"] = stylesheets_path
  end
end

#  Version is a number. If a version contains alphas, it will be created as a prerelease version
#  Date is in the form of YYYY-MM-DD
module SassyCast
  VERSION = "2.0.0"
  DATE = "2016-06-03"
end
