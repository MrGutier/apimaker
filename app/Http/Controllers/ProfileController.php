<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use App\Models\UserUser;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $datos = DB::table('users_users')->where('user_id', Auth::user()->id)->pluck('miembro_id');
        $miembros=User::whereIn('id', $datos)->get();
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'miembros'=>$miembros,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }
    public function updateMembers(Request $request): RedirectResponse
    {


        if (Auth::user()->type=="organization") {
            echo $request;
            echo $request;
            $miembro=$request->nombreMiembro;
            //query para obtener el id del miembr
            $idMiembro=User::select("id")->where(DB::raw('lower(name)'), strtolower($miembro))->get();

            if($idMiembro->isEmpty()){
                return Redirect::route('profile.edit');
            }else{
                DB::insert('insert into users_users (user_id, miembro_id) values (?, ?)', [Auth::user()->id, $idMiembro[0]->id]);
            }

        }

        return Redirect::route('profile.edit');
    }

    public function removeMembers(Request $request): RedirectResponse
    {

        if (Auth::user()->type=="organization") {

            $id = UserUser::where('miembro_id', $request->id)->where('user_id', Auth::user()->id)->pluck('id');
            echo $id;
            foreach ($id as $id) {
                UserUser::findOrFail($id)->delete();
            }
        }

        return Redirect::route('profile.edit');
    }
    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
