<?php
// app\Http\Controllers\ApiController.php
namespace App\Http\Controllers;

use App\Models\Api;
use App\Models\UserUser;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia; // Import Inertia class to render components


class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Here we provide apis from the database to prop that we created in component
        $datos = Api::all();

        return Inertia::render('Index', [
            'apis' => $datos,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function show()
    {
        // Here we provide apis from the database to prop that we created in component
        $datos = Api::all();
        return Inertia::render('Index', [
            'apis' => $datos,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
    public function listaApis()
    {
        // Here we provide apis from the database to prop that we created in component
        $datos = DB::table('apis')->where('publicada', 1)->where('publica', 1)->get();

        return Inertia::render('Index', [
            'apis' => $datos,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
    public function vistaApi(Request $request)
    {
        // Here we provide apis from the database to prop that we created in component
        $id = $request->id;
        $idDueno = Api::findOrFail($id)->user_id;
        $datos = Api::findOrFail($id);
        $file = Storage::disk('public')->get(Api::findOrFail($id)->archivo);
        if (Auth::user()->id == $idDueno || UserUser::where('user_id', $idDueno)->where('miembro_id', Auth::user()->id)->count() > 0) {
            return Inertia::render('Index', [
                'apis' => $datos,
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'file'=>$file,
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]);
        } else {
            if (Api::findOrFail($id)->publica == 0 || Api::findOrFail($id)->publicada == 0) {
                return Inertia::location(route('home'));
            } else {
                return Inertia::render('Index', [
                    'apis' => $datos,
                    'canLogin' => Route::has('login'),
                    'canRegister' => Route::has('register'),
                    'file'=>$file,
                    'laravelVersion' => Application::VERSION,
                    'phpVersion' => PHP_VERSION,
                ]);
            }
        }
    }
    public function listaApisPrivadas(Request $request)
    {
        // Here we provide apis from the database to prop that we created in component
        $id = $request->id;


        $datos = DB::table('apis')->where('user_id', Auth::user()->id)->get();
        $idOrganizaciones = DB::table('users_users')->where('miembro_id', Auth::user()->id)->pluck('user_id');
        $datosOrganizaciones=DB::table('apis')->whereIn('user_id', $idOrganizaciones)->get();
        if (Auth::user()) {
            return Inertia::render('Index', [
                'apis' => $datos,
                'apisorganizaciones'=>$datosOrganizaciones,
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),

                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]);
        } else {
            return Inertia::location(route('home'));

        }
    }
    public function crearApi(Request $request)
    {
        // Here we provide apis from the database to prop that we created in component

        return Inertia::render('Index', [

            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
    // ...*/
    /*public function store(Request $request)
    {
        // Here we provide apis from the database to prop that we created in component
        Api::create([

            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'archivo' => $request->archivo,
            'publica' => $request->publica,
            'publicada' => $request->publicada,
            'user_id' => Auth::id(),
        ]);
    }*/
    public function store(Request $request)
    {
        $file = null;
        $next_id=Api::max('id')+1;
        if ($request->archivo) {

            $file = $request->nombre ."_". $next_id . ".json";
            Storage::disk('public')->put($file, $request->archivo);
            /*$path = $request->file('documento')->put('reconocimientoIMG', ['disk' => 'public']);*/
        }
        $api = Api::create([

            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'archivo' => $file,
            'publica' => $request->publica,
            'publicada' => $request->publicada,
            'user_id' => Auth::id(),
        ]);
        $url = "/listaapis/".$api->id."/editar";
        return Inertia::location($url);
    }
    public function editarApi(Request $request)
    {
        // Here we provide apis from the database to prop that we created in component
        if (Auth::user()->id != Api::findOrFail($request->id)->user_id) {
            return Inertia::location(route('home'));
        } else {
            $id = $request->id;

            $datos = Api::findOrFail($id);

            $file = Storage::disk('public')->get(Api::findOrFail($id)->archivo);

            return Inertia::render('Index', [
                'apis' => $datos,
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'file' => $file,
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]);
        }
    }
    public function update(Request $request)
    {
        if (Auth::user()->id != Api::findOrFail($request->id)->user_id) {
            return Inertia::location(route('home'));
        } else {
            $id = $request->id;
            $file = $request->nombre ."_". $id . ".json";

            Storage::disk('public')->put($file, $request->archivo);

            Api::findOrFail($id)->update([

                'nombre' => $request->nombre,
                'descripcion' => $request->descripcion,
                'archivo' => $file,
                'publica' => $request->publica,
                'publicada' => $request->publicada,
                'user_id' => Auth::id(),
            ]);
            $url = "/listaapis/".$id."/editar";
            return Inertia::location($url);
        }

        /*return Inertia::location(route('home'));*/
    }
    public function destroy(Request $request)
    {
        if (Auth::user()->id != Api::findOrFail($request->id)->user_id) {
            return Inertia::location(route('home'));
        } else {
            $id = $request->id;
            Api::findOrFail($id)->delete();
            return Inertia::location(route('home'));
        }
    }
    public function getApiData(Request $request, $id)
    {
        $file = Storage::disk('public')->get(Api::findOrFail($id)->archivo);

        return response()->json(json_decode($file));
    }
}
