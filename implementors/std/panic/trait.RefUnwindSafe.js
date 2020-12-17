(function() {var implementors = {};
implementors["som_core"] = [{"text":"impl RefUnwindSafe for ClassDef","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MethodDef","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Body","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BinaryOp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Block","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Term","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MethodKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MethodBody","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Expression","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Bytecode","synthetic":true,"types":[]}];
implementors["som_interpreter_ast"] = [{"text":"impl !RefUnwindSafe for Block","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Class","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for MaybeWeak&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Frame","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for FrameKind","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Instance","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Interned","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Interner","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Return","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Method","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MethodKind","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for CoreClasses","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Universe","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Value","synthetic":true,"types":[]}];
implementors["som_interpreter_bc"] = [{"text":"impl !RefUnwindSafe for Block","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Class","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for MaybeWeak&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Frame","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for FrameKind","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Instance","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Interned","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Interner","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Interpreter","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MethodEnv","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Method","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for MethodKind","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for CoreClasses","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Universe","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Value","synthetic":true,"types":[]}];
implementors["som_lexer"] = [{"text":"impl RefUnwindSafe for Lexer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Token","synthetic":true,"types":[]}];
implementors["som_parser_core"] = [{"text":"impl&lt;A, B&gt; RefUnwindSafe for And&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; RefUnwindSafe for Or&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, F, T&gt; RefUnwindSafe for Map&lt;P, F, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B, U&gt; RefUnwindSafe for AndLeft&lt;A, B, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B, T&gt; RefUnwindSafe for AndRight&lt;A, B, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; RefUnwindSafe for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()